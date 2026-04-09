"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { DISPLAY_FILTER_LABELS, type DisplayFilter } from "../data/services";

const PREVIEW_CATEGORIES: Exclude<DisplayFilter, "all">[] = [
  "men",
  "women",
  "highlights-balayage",
  "colour",
  "keratin",
  "children",
];

export default function ServicesPreview() {
  const { t, lang } = useLanguage();
  const labels = DISPLAY_FILTER_LABELS[lang];

  return (
    <section className="bg-[#FAFAF8] py-14 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] mb-3">
          {t.services.eyebrow}
        </p>
        <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-light tracking-wide text-[#1A1A1A] mb-8 md:mb-10">
          {t.services.heading}
        </h2>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 md:mb-10">
          {PREVIEW_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href="/tjenester"
              className="border border-[#E5DDD4] bg-white px-5 py-5 flex items-center justify-between gap-3 hover:border-[#C4A882] hover:shadow-sm transition-all group"
            >
              <span className="text-[14px] md:text-[15px] font-normal text-[#1A1A1A] group-hover:text-[#C4A882] transition-colors">
                {labels[cat]}
              </span>
              <span className="text-[#C4A882] text-sm flex-none" aria-hidden>→</span>
            </Link>
          ))}
        </div>

        {/* Unsure + CTA */}
        <div className="border-t border-[#E5DDD4] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-[15px] font-normal text-[#1A1A1A] mb-1">
              {t.services.unsureHeading}
            </p>
            <p className="text-[15px] text-[#5C5650] font-normal">
              {t.services.unsureSub}
            </p>
          </div>
          <Link
            href="/tjenester"
            className="flex-none w-full sm:w-auto text-center px-8 py-3.5 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            {t.preview.allServices}
          </Link>
        </div>

      </div>
    </section>
  );
}
