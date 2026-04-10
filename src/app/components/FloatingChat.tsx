"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";

type Message = { role: "assistant" | "user"; content: string };

export default function FloatingChat() {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: t.floating.greeting },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset chat when language changes
  useEffect(() => {
    setMessages([{ role: "assistant", content: t.floating.greeting }]);
  }, [lang, t.floating.greeting]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 320);
    }
  }, [isOpen]);

  // Listen for hero button open-chat event
  useEffect(() => {
    function handleOpenChat() {
      setIsOpen(true);
    }
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].slice(1), // skip initial greeting
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Beklager, noe gikk galt. Ring oss på 455 55 898 så hjelper vi deg direkte.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }, [messages]);

  /* Shared chat panel content */
  const chatHeader = (
    <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
      <div className="flex items-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[12px] tracking-[0.18em] uppercase text-white/65 font-normal">
          {t.floating.header}
        </span>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        aria-label={t.floating.close}
        className="text-white/25 hover:text-white/60 transition-colors duration-200 text-lg leading-none p-1"
      >
        ×
      </button>
    </div>
  );

  const chatMessages = (
    <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} chat-msg-enter`}
          style={{ animationDelay: `${i * 50}ms` }}
        >
          <div
            className={`max-w-[85%] px-3.5 py-2.5 text-[14px] font-normal leading-relaxed whitespace-pre-line ${
              msg.role === "user"
                ? "bg-[#C4A882] text-[#0F0F0F]"
                : "bg-white/[0.07] text-white/75"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
      {isTyping && (
        <div className="flex justify-start chat-msg-enter">
          <div className="bg-white/[0.07] px-3.5 py-3 flex gap-1.5 items-center">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#C4A882]/50 typing-dot"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );

  const chatSuggestions = messages.length === 1 ? (
    <div className="px-5 pb-3 flex flex-wrap gap-1.5">
      {t.assistant.suggestions.slice(0, 3).map((s, i) => (
        <button
          key={s}
          onClick={() => sendMessage(s)}
          className="text-[12px] font-normal text-white/45 border border-white/[0.08] px-2.5 py-1.5 hover:border-[#C4A882]/40 hover:text-white/70 transition-all duration-250 leading-snug text-left active:scale-[0.97]"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          {s}
        </button>
      ))}
    </div>
  ) : null;

  const chatInput = (
    <form
      onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
      className="border-t border-white/[0.07] flex"
    >
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t.floating.placeholder}
        className="flex-1 px-4 py-3.5 text-[14px] font-normal bg-transparent text-white/85 placeholder-white/30 outline-none"
      />
      <button
        type="submit"
        disabled={!input.trim() || isTyping}
        className="px-4 text-[11px] tracking-widest uppercase text-[#C4A882] font-medium hover:text-white border-l border-white/[0.07] transition-colors duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
      >
        →
      </button>
    </form>
  );

  return (
    <>
      {/* ── Mobile: fullscreen overlay ── */}
      <div
        className={`md:hidden fixed inset-0 z-[70] flex flex-col bg-[#111111] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {chatHeader}
        {chatMessages}
        {chatSuggestions}
        {chatInput}
      </div>

      {/* ── Mobile: trigger button (fixed bottom) ── */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? t.floating.close : t.floating.open}
        className={`md:hidden fixed bottom-5 right-5 z-[65] flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-[#1A1A1A] border border-white/10 scale-90 opacity-0 pointer-events-none"
            : "bg-[#C4A882] text-[#0F0F0F] active:scale-95"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* ── Desktop: floating panel + trigger pill ── */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3">
        {/* Chat panel */}
        <div
          className={`flex flex-col bg-[#111111] border border-white/[0.10] shadow-2xl w-[340px] transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-[0.96] translate-y-3 pointer-events-none"
          }`}
          style={{ height: 420 }}
        >
          {chatHeader}
          {chatMessages}
          {chatSuggestions}
          {chatInput}
        </div>

        {/* Trigger pill */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? t.floating.close : t.floating.open}
          className={`btn-press flex items-center gap-2.5 px-5 py-3 transition-all duration-250 shadow-lg ${
            isOpen
              ? "bg-[#1A1A1A] border border-white/10 text-white/50 hover:text-white/80"
              : "bg-[#C4A882] text-[#0F0F0F] hover:bg-white"
          }`}
        >
          <svg className="w-4 h-4 flex-none" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-[12px] tracking-[0.15em] uppercase font-medium">
            {isOpen ? t.floating.close : t.floating.open}
          </span>
        </button>
      </div>
    </>
  );
}
