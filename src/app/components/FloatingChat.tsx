"use client";

import { useState, useRef, useEffect } from "react";
import { getResponse, type Message } from "../lib/chatResponses";
import { useLanguage } from "../context/LanguageContext";

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

  function sendMessage(text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: text.trim() }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: getResponse(text, lang) },
      ]);
    }, 800 + Math.random() * 500);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat panel */}
      <div
        className={`flex flex-col bg-[#111111] border border-white/[0.10] shadow-2xl w-[340px] transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-3 pointer-events-none"
        }`}
        style={{ height: 420 }}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A882] animate-pulse" />
            <span className="text-[12px] tracking-[0.18em] uppercase text-white/65 font-normal">
              {t.floating.header}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Lukk chat"
            className="text-white/25 hover:text-white/60 transition-colors text-lg leading-none"
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-3.5 py-2.5 text-[14px] font-normal leading-relaxed ${
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
            <div className="flex justify-start">
              <div className="bg-white/[0.07] px-3.5 py-3 flex gap-1.5 items-center">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#C4A882]/50 animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick suggestions — show only on first message */}
        {messages.length === 1 && (
          <div className="px-5 pb-3 flex flex-wrap gap-1.5">
            {t.assistant.suggestions.slice(0, 3).map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="text-[12px] font-normal text-white/45 border border-white/[0.08] px-2.5 py-1.5 hover:border-[#C4A882]/40 hover:text-white/70 transition-all leading-snug text-left"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
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
            className="px-4 text-[11px] tracking-widest uppercase text-[#C4A882] font-medium hover:text-white border-l border-white/[0.07] transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
          >
            →
          </button>
        </form>
      </div>

      {/* Trigger pill */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? t.floating.close : t.floating.open}
        className={`flex items-center gap-2.5 px-5 py-3 transition-all duration-200 shadow-lg ${
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
  );
}
