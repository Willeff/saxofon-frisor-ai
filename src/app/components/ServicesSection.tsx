"use client";

import { useState, useMemo, useRef } from "react";
import { getServices, DISPLAY_FILTERS, DISPLAY_FILTER_LABELS, CATEGORY_LABELS, filterServices, type DisplayFilter } from "../data/services";
import { useLanguage } from "../context/LanguageContext";

const CATEGORY_STYLE_MAP: Record<string, string> = {
  men: "bg-[#1A1A1A] text-white",
  women: "bg-[#F2EDE5] text-[#7A746E]",
  "colour-cut": "bg-[#C4A882]/15 text-[#8B6B42]",
  "highlights-balayage": "bg-[#C4A882]/15 text-[#8B6B42]",
  treatment: "bg-emerald-50 text-emerald-700",
};

function getCategoryStyle(categoryLabel: string, lang: Parameters<typeof getServices>[0]): string {
  const labels = CATEGORY_LABELS[lang];
  for (const [id, label] of Object.entries(labels)) {
    if (label === categoryLabel) return CATEGORY_STYLE_MAP[id] ?? "bg-[#F2EDE5] text-[#7A746E]";
  }
  return "bg-[#F2EDE5] text-[#7A746E]";
}

const DEFAULT_VISIBLE = 6;

export default function ServicesSection() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<DisplayFilter>("all");
  const [showAll, setShowAll] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const services = useMemo(() => getServices(lang), [lang]);
  const filterLabels = DISPLAY_FILTER_LABELS[lang];

  const filtered = useMemo(() => filterServices(services, activeFilter), [activeFilter, services]);

  const displayedServices = activeFilter === "all" && !showAll
    ? filtered.slice(0, DEFAULT_VISIBLE)
    : filtered;

  const hasMore = activeFilter === "all" && !showAll && filtered.length > DEFAULT_VISIBLE;

  function handleFilterClick(filter: DisplayFilter) {
    setActiveFilter(filter);
    setShowAll(false);
  }

  function scrollToFilters() {
    filterRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

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
          <p className="text-[15px] text-[#4A4540] font-normal max-w-2xl leading-relaxed">
            {t.services.intro}
          </p>
        </div>

        {/* Filter chips */}
        <div ref={filterRef} className="mb-8 md:mb-10 scroll-mt-24">
          <div className="flex flex-wrap gap-2">
            {DISPLAY_FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              const count = filter === "all"
                ? services.length
                : filterServices(services, filter).length;

              return (
                <button
                  key={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={`flex-none flex items-center gap-1.5 px-4 py-2.5 text-[13px] tracking-wide border transition-all whitespace-nowrap font-normal ${
                    isActive
                      ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                      : "bg-white text-[#7A746E] border-[#E5DDD4] hover:border-[#C4A882] hover:text-[#1A1A1A]"
                  }`}
                >
                  {filterLabels[filter]}
                  <span className="text-[11px] tabular-nums text-[#C4A882]">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active filter summary */}
          {activeFilter !== "all" && (
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <span className="text-[15px] text-[#5C5650] font-normal">
                {t.services.activeFilterText(filtered.length, filterLabels[activeFilter])}
              </span>
              <button
                onClick={() => { setActiveFilter("all"); setShowAll(false); }}
                className="text-[13px] text-[#C4A882] underline underline-offset-2 hover:text-[#1A1A1A] transition-colors font-normal"
              >
                {t.services.reset}
              </button>
            </div>
          )}
        </div>

        {/* Service cards */}
        {displayedServices.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {displayedServices.map((service, i) => (
              <div
                key={`${service.title}-${i}`}
                className="bg-white border border-[#E5DDD4] flex flex-col hover:border-[#C4A882] hover:shadow-sm transition-all group"
              >
                <div className="px-5 pt-5 pb-4 md:px-6 md:pt-6 flex-1">
                  <span
                    className={`inline-block text-[11px] tracking-[0.15em] uppercase px-2 py-1 mb-3 font-normal ${getCategoryStyle(service.category, lang)}`}
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

        {/* Show more / Back to filters */}
        {hasMore && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 text-[13px] tracking-[0.15em] uppercase border border-[#E5DDD4] text-[#5C5650] hover:border-[#C4A882] hover:text-[#1A1A1A] transition-all font-normal"
            >
              {t.services.visAlle} ({filtered.length})
            </button>
          </div>
        )}

        {(showAll || activeFilter !== "all") && displayedServices.length > DEFAULT_VISIBLE && (
          <div className="mt-6 text-center">
            <button
              onClick={scrollToFilters}
              className="text-[13px] text-[#C4A882] underline underline-offset-2 hover:text-[#1A1A1A] transition-colors font-normal"
            >
              {t.services.backToFilters}
            </button>
          </div>
        )}

        {/* Price note */}
        <p className="mt-6 text-[13px] text-[#5C5650]/70 font-normal text-center">
          {t.services.priceNote}
        </p>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-[#E5DDD4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 md:gap-6">
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
