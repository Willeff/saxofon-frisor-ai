"use client";

import Link from "next/link";
import { useConsent } from "../context/ConsentContext";
import { useLanguage } from "../context/LanguageContext";

export default function CookieBanner() {
  const { bannerOpen, acceptAnalytics, declineAnalytics } = useConsent();
  const { t } = useLanguage();

  if (!bannerOpen) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.cookie.title}
      className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-3 sm:px-6 sm:pb-6 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl bg-[#0F0F0F] text-white border border-white/[0.12] shadow-2xl rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-8 sm:py-7 relative">
        {/* Close (X) — mobile only */}
        <button
          type="button"
          onClick={declineAnalytics}
          aria-label={t.cookie.close}
          className="sm:hidden absolute top-1.5 right-1.5 p-1.5 text-white/50 hover:text-white transition-colors"
        >
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile: compact layout */}
        <div className="sm:hidden pr-5">
          <p className="text-[11px] text-white/80 leading-snug mb-2">
            {t.cookie.body}{" "}
            <Link
              href="/personvern"
              className="underline underline-offset-2 text-white/90"
            >
              {t.cookie.privacyLink}
            </Link>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={acceptAnalytics}
              className="btn-press flex-1 px-3 py-2 bg-[#E0C89A] text-[#0F0F0F] text-[11px] tracking-[0.12em] uppercase font-semibold hover:bg-white transition-colors rounded-md shadow-sm"
            >
              {t.cookie.accept}
            </button>
            <button
              type="button"
              onClick={declineAnalytics}
              className="btn-press flex-1 px-3 py-2 bg-transparent border border-white/25 text-white/85 text-[11px] tracking-[0.12em] uppercase font-medium hover:bg-white/10 hover:text-white transition-colors rounded-md"
            >
              {t.cookie.decline}
            </button>
          </div>
        </div>

        {/* Desktop: full version */}
        <div className="hidden sm:block">
          <p className="text-[12px] tracking-[0.25em] uppercase text-[#C4A882] font-normal mb-3">
            {t.cookie.title}
          </p>
          <p className="text-[15px] text-white/80 leading-[1.7] mb-5">
            {t.cookie.bodyLong}{" "}
            <Link
              href="/personvern"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              {t.cookie.privacyLink}
            </Link>
            .
          </p>
          <div className="flex flex-row gap-4">
            <button
              type="button"
              onClick={acceptAnalytics}
              className="btn-press flex-1 px-6 py-3 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-white transition-colors rounded-md"
            >
              {t.cookie.accept}
            </button>
            <button
              type="button"
              onClick={declineAnalytics}
              className="btn-press flex-1 px-6 py-3 bg-transparent border border-white/30 text-white text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-white/10 transition-colors rounded-md"
            >
              {t.cookie.decline}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
