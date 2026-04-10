"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { LANGUAGES } from "../lib/translations";

export default function LanguageSwitcher({
  inline = false,
  variant = "dark",
}: {
  inline?: boolean;
  variant?: "dark" | "light";
}) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang);
  const isLight = variant === "light";

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [open]);

  const options = LANGUAGES.map((l) => {
    const isActive = lang === l.code;
    return (
      <button
        key={l.code}
        role="option"
        aria-selected={isActive}
        type="button"
        onClick={() => {
          setLang(l.code);
          setOpen(false);
        }}
        className={`w-full flex items-center justify-between px-4 py-2.5 text-[14px] font-normal transition-colors duration-200 text-left ${
          isLight
            ? isActive
              ? "text-[#1A1A1A] bg-[#F7F4EF]"
              : "text-[#7A746E] hover:text-[#1A1A1A] hover:bg-[#F7F4EF]"
            : isActive
              ? "text-white bg-white/[0.06]"
              : "text-white/55 hover:text-white hover:bg-white/[0.04]"
        }`}
      >
        <span>{l.native}</span>
        {isActive && (
          <svg
            className="w-3 h-3 text-[#C4A882] flex-none"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>
    );
  });

  return (
    <div ref={containerRef} className="relative">
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`relative flex items-center gap-1.5 text-[12px] tracking-[0.18em] uppercase transition-colors duration-200 py-1 select-none ${
          isLight
            ? "text-[#7A746E] hover:text-[#1A1A1A]"
            : "text-white/60 hover:text-white"
        }`}
      >
        <svg
          className="w-3.5 h-3.5 flex-none"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          viewBox="0 0 24 24"
          aria-hidden
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3c-3 4-3 14 0 18M12 3c3 4 3 14 0 18M3 12h18" />
        </svg>
        <span>{current?.label ?? "Language"}</span>
        <svg
          className={`w-2.5 h-2.5 flex-none transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label="Select language"
          className={`dropdown-enter ${
            inline
              ? `mt-2 w-44 shadow-2xl py-1 ${isLight ? "bg-white border border-[#E0D9D0]" : "bg-[#161616] border border-white/[0.1]"}`
              : `absolute top-full left-0 mt-2 w-44 shadow-2xl z-[9999] py-1 ${isLight ? "bg-white border border-[#E0D9D0]" : "bg-[#161616] border border-white/[0.1]"}`
          }`}
        >
          {options}
        </div>
      )}
    </div>
  );
}
