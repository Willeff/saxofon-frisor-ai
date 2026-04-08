"use client";

import { useState, useMemo } from "react";
import { SERVICES, FILTER_TAGS, type FilterTag } from "../data/services";
import { useLanguage } from "../context/LanguageContext";

const CATEGORY_COLORS: Record<string, string> = {
  "Herrer": "bg-[#1A1A1A] text-white",
  "Damer": "bg-[#F2EDE5] text-[#7A746E]",
  "Farge og klipp": "bg-[#C4A882]/15 text-[#8B6B42]",
  "Striper og balayage": "bg-[#C4A882]/15 text-[#8B6B42]",
};

function getCategoryStyle(category: string): string {
  return CATEGORY_COLORS[category] ?? "bg-[#F2EDE5] text-[#7A746E]";
}

export default function ServicesSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterTag>("Vis alle");

  const filtered = useMemo(() => {
    if (activeFilter === "Vis alle") return SERVICES;
    return SERVICES.filter((s) => s.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="tjenester" className="bg-[#FAFAF8] py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-6 md:mb-8">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] mb-3 md:mb-4">
            {t.services.eyebrow}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-light tracking-wide text-[#1A1A1A] mb-4 md:mb-5">
            {t.services.heading}
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#4A4540] font-normal max-w-2xl leading-relaxed">
            {t.services.intro}
          </p>
        </div>

        {/* Filter chips */}
        <div className="mb-8 md:mb-10">
          <div className="flex flex-wrap gap-2">
            {FILTER_TAGS.map((tag) => {
              const isActive = activeFilter === tag;
              const count =
                tag === "Vis alle"
                  ? SERVICES.length
                  : SERVICES.filter((s) => s.tags.includes(tag)).length;
              const displayLabel = tag === "Vis alle" ? t.services.visAlle : tag;

              return (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`flex-none flex items-center gap-1.5 px-4 py-2.5 text-[13px] tracking-wide border transition-all whitespace-nowrap font-normal ${
                    isActive
                      ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                      : "bg-white text-[#7A746E] border-[#E5DDD4] hover:border-[#C4A882] hover:text-[#1A1A1A]"
                  }`}
                >
                  {displayLabel}
                  <span className="text-[11px] tabular-nums text-[#C4A882]">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active filter summary */}
          {activeFilter !== "Vis alle" && (
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <span className="text-[15px] text-[#5C5650] font-normal">
                {t.services.activeFilterText(filtered.length, activeFilter)}
              </span>
              <button
                onClick={() => setActiveFilter("Vis alle")}
                className="text-[13px] text-[#C4A882] underline underline-offset-2 hover:text-[#1A1A1A] transition-colors font-normal"
              >
                {t.services.reset}
              </button>
            </div>
          )}
        </div>

        {/* Service cards */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {filtered.map((service, i) => (
              <div
                key={`${service.title}-${i}`}
                className="bg-white border border-[#E5DDD4] flex flex-col hover:border-[#C4A882] hover:shadow-sm transition-all group"
              >
                <div className="px-5 pt-5 pb-4 md:px-6 md:pt-6 flex-1">
                  <span
                    className={`inline-block text-[11px] tracking-[0.15em] uppercase px-2 py-1 mb-3 font-normal ${getCategoryStyle(service.category)}`}
                  >
                    {service.category}
                  </span>
                  <h3 className="text-base font-normal text-[#1A1A1A] mb-2 md:mb-3 leading-snug group-hover:text-[#C4A882] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#4A4540] font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="px-5 md:px-6 py-4 border-t border-[#E5DDD4] flex items-center justify-between gap-4">
                  <span className="text-lg font-normal text-[#1A1A1A] tabular-nums">
                    {service.price}
                  </span>
                  <a
                    href="https://bestill.timma.no/saxofon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] tracking-[0.15em] uppercase text-white bg-[#1A1A1A] px-4 py-2.5 hover:bg-[#C4A882] transition-colors whitespace-nowrap font-medium"
                  >
                    {t.services.bookCard}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-[15px] text-[#5C5650] font-normal">{t.services.noResults}</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-[#E5DDD4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 md:gap-6">
          <div>
            <p className="text-[15px] font-normal text-[#1A1A1A] mb-1">
              {t.services.unsureHeading}
            </p>
            <p className="text-[15px] text-[#5C5650] font-normal">
              {t.services.unsureSub}
            </p>
          </div>
          <a
            href="https://bestill.timma.no/saxofon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none w-full sm:w-auto text-center px-8 py-3.5 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            {t.services.book}
          </a>
        </div>

      </div>
    </section>
  );
}
