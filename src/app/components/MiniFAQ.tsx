"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function MiniFAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = t.faq.items.slice(0, 3);

  return (
    <section className="bg-[#FAFAF8] py-14 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] mb-3">
          {t.faq.eyebrow}
        </p>
        <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-light tracking-wide text-[#1A1A1A] mb-8">
          {t.faq.heading}
        </h2>

        <div className="divide-y divide-[#E0D9D0]">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="text-[15px] font-normal text-[#1A1A1A] group-hover:text-[#C4A882] transition-colors leading-snug">
                    {item.q}
                  </span>
                  <span className={`flex-none w-5 h-5 flex items-center justify-center text-[#C4A882] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-40 pb-5" : "max-h-0"}`}>
                  <p className="text-[14px] text-[#4A4540] font-normal leading-relaxed pr-10">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
