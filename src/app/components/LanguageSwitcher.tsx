"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { LANGUAGES } from "../lib/translations";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  const current = LANGUAGES.find((l) => l.code === lang);

  const updatePosition = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setPos({
      top: rect.bottom + 8,
      left: Math.max(8, rect.left),
    });
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        buttonRef.current?.contains(e.target as Node) ||
        dropdownRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setOpen(false);
    }
    // Use setTimeout to avoid catching the same click that opened the dropdown
    const id = setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 0);
    return () => {
      clearTimeout(id);
      document.removeEventListener("click", handleClick);
    };
  }, [open]);

  function toggle() {
    if (!open) {
      updatePosition();
    }
    setOpen((v) => !v);
  }

  return (
    <>
      {/* Toggle button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="relative flex items-center gap-1.5 text-[12px] tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors py-1 select-none"
      >
        {/* Globe icon */}
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
          className={`w-2.5 h-2.5 flex-none transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown — fixed position to escape overflow:hidden on mobile drawer */}
      {open && pos && (
        <div
          ref={dropdownRef}
          role="listbox"
          aria-label="Select language"
          className="fixed w-44 bg-[#161616] border border-white/[0.1] shadow-2xl z-[9999] py-1"
          style={{ top: pos.top, left: pos.left }}
        >
          {LANGUAGES.map((l) => {
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
                className={`w-full flex items-center justify-between px-4 py-2.5 text-[14px] font-normal transition-colors text-left ${
                  isActive
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
          })}
        </div>
      )}
    </>
  );
}
