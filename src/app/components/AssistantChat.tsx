"use client";

import { useState, useRef, useEffect } from "react";
import { getResponse, type Message } from "../lib/chatResponses";
import { useLanguage } from "../context/LanguageContext";

export default function AssistantChat() {
  const { t, lang } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: t.assistant.greeting },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset chat when language changes
  useEffect(() => {
    setMessages([{ role: "assistant", content: t.assistant.greeting }]);
    setInput("");
    setIsTyping(false);
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll to bottom whenever messages or typing indicator changes
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setIsTyping(true);

    const delay = 800 + Math.random() * 500;
    setTimeout(() => {
      const reply = getResponse(trimmed, lang);
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    }, delay);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleSuggestion(s: string) {
    sendMessage(s);
  }

  return (
    <section
      id="assistent"
      className="bg-[#171717] border-t border-white/[0.08] py-16 md:py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-4 mb-5 md:mb-6">
              <span className="block w-10 h-px bg-[#C4A882]/50" />
              <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] font-light">
                {t.assistant.eyebrow}
              </p>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-light tracking-[0.02em] leading-[1.18] text-white mb-3 md:mb-4">
              {t.assistant.heading}
            </h2>
            <p className="text-[16px] md:text-[17px] text-white/75 font-normal max-w-sm leading-relaxed">
              {t.assistant.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A882] animate-pulse" />
            <span className="text-[12px] tracking-widest uppercase text-white/60 font-normal">
              {t.assistant.online}
            </span>
          </div>
        </div>

        {/* Chat layout */}
        <div className="flex flex-col md:grid md:grid-cols-[1fr_280px] gap-4 md:gap-6 md:items-start">

          {/* Chat window */}
          <div
            className="w-full border border-white/[0.12] bg-[#1E1E1E] flex flex-col"
            style={{ height: 400 }}
          >
            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-6 space-y-3 md:space-y-4"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] md:max-w-[82%] px-3.5 md:px-4 py-2.5 md:py-3 text-[15px] md:text-[16px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#C4A882] text-[#0F0F0F] font-normal"
                        : "bg-[#2C2C2C] text-white/90 font-light"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#2C2C2C] px-4 py-3.5 flex gap-1.5 items-center">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#C4A882]/70 animate-bounce"
                        style={{ animationDelay: `${i * 150}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input form */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-white/[0.12] flex bg-[#191919]"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.assistant.placeholder}
                className="flex-1 px-4 md:px-5 py-4 text-[15px] font-light bg-transparent text-white/95 placeholder-white/50 outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="px-5 md:px-6 text-[11px] tracking-[0.18em] uppercase text-[#C4A882] hover:text-white border-l border-white/[0.12] transition-colors disabled:opacity-30 disabled:cursor-not-allowed min-w-[56px] font-medium"
              >
                {t.assistant.send}
              </button>
            </form>
          </div>

          {/* Suggestions */}
          <div className="flex flex-col gap-2 w-full">
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/55 font-normal mb-2 md:mb-3">
              {t.assistant.suggestionsLabel}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
              {t.assistant.suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleSuggestion(s)}
                  disabled={isTyping}
                  className="text-left px-4 py-3.5 border border-white/[0.14] bg-[#1E1E1E] text-[15px] font-normal text-white/80 hover:border-[#C4A882]/60 hover:text-white hover:bg-[#252525] transition-all disabled:opacity-30 disabled:cursor-not-allowed leading-snug"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
