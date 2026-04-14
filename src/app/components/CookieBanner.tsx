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
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl bg-[#0F0F0F] text-white border border-white/[0.12] shadow-2xl px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-[12px] tracking-[0.25em] uppercase text-[#C4A882] font-normal mb-3">
          {t.cookie.title}
        </p>
        <p className="text-[14px] sm:text-[15px] text-white/80 leading-[1.7] mb-5">
          {t.cookie.body}{" "}
          <Link
            href="/personvern"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            {t.cookie.privacyLink}
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            type="button"
            onClick={acceptAnalytics}
            className="btn-press flex-1 px-6 py-3 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-white transition-colors"
          >
            {t.cookie.accept}
          </button>
          <button
            type="button"
            onClick={declineAnalytics}
            className="btn-press flex-1 px-6 py-3 bg-transparent border border-white/30 text-white text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-white/10 transition-colors"
          >
            {t.cookie.decline}
          </button>
        </div>
      </div>
    </div>
  );
}
