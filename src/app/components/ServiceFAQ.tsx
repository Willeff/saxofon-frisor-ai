"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { pushEvent } from "../lib/analytics";
import { useInView } from "../hooks/useInView";

export default function ServiceFAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView();

  const items = (t.faq as Record<string, unknown>).serviceItems as
    | { q: string; a: string }[]
    | undefined;

  if (!items || items.length === 0) return null;

  // FAQPage structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section ref={ref} className="bg-[#F7F4EF] py-16 md:py-24 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 md:mb-14">
          <div
            className={`flex items-center gap-4 mb-5 anim-fade-in-up ${inView ? "in-view" : ""}`}
          >
            <span className="block w-10 h-px bg-[#C4A882]/50" />
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] font-light">
              {t.faq.eyebrow}
            </p>
          </div>
          <h2
            className={`text-[clamp(2rem,4vw,3.2rem)] font-light tracking-[0.02em] leading-[1.18] text-[#1A1A1A] anim-fade-in-up stagger-1 ${inView ? "in-view" : ""}`}
          >
            {t.faq.heading}
          </h2>
        </div>

        <div
          className={`divide-y divide-[#E0D9D0] anim-fade-in-up stagger-2 ${inView ? "in-view" : ""}`}
        >
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left group"
                >
                  <span className="text-[15px] md:text-[16px] font-normal text-[#1A1A1A] group-hover:text-[#C4A882] transition-colors duration-250 leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`flex-none w-6 h-6 flex items-center justify-center text-[#C4A882] transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`faq-body ${isOpen ? "open" : ""}`}>
                  <div>
                    <p className="text-[14px] md:text-[15px] text-[#4A4540] font-normal leading-relaxed pr-10 pb-5 md:pb-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-10 md:mt-14 text-center anim-fade-in-up stagger-3 ${inView ? "in-view" : ""}`}
        >
          <p className="text-[15px] text-[#4A4540] font-normal mb-4">
            {t.faq.cta}
          </p>
          <a
            href="https://bestill.timma.no/saxofon"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => pushEvent("booking_click", { location: "service_faq" })}
            className="btn-press inline-block px-8 py-3.5 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            {t.faq.book}
          </a>
        </div>
      </div>
    </section>
  );
}
