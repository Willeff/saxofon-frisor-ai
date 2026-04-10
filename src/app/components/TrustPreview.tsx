"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

export default function TrustPreview() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();
  const v = inView ? "in-view" : "";

  return (
    <section ref={ref} className="bg-[#F7F4EF] py-14 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className={`flex items-center gap-4 mb-8 anim-fade-in-up ${v}`}>
          <span className="block w-10 h-px bg-[#C4A882]/50" />
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] font-light">
            {t.trust.eyebrow}
          </p>
        </div>

        {/* Heading + body — each element gets its own animation */}
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start mb-10 md:mb-12">
          <div>
            <h2 className={`text-[clamp(1.6rem,3.5vw,2.6rem)] font-light tracking-[0.02em] leading-[1.2] text-[#1A1A1A] mb-4 anim-fade-in-up stagger-1 ${v}`}>
              {t.trust.heading.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p className={`text-[15px] text-[#4A4540] font-normal leading-[1.8] max-w-lg anim-fade-in-up stagger-2 ${v}`}>
              {t.trust.body1}
            </p>
          </div>
        </div>

        {/* Compact stats row */}
        <div className={`grid grid-cols-3 border border-[#E0D9D0] mb-8 anim-fade-in-up stagger-3 ${v}`}>
          {t.trust.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-5 sm:px-6 sm:py-7 flex flex-col gap-1 transition-colors duration-300 hover:bg-[#EDE8E0]/50 ${
                i < t.trust.stats.length - 1 ? "border-r border-[#E0D9D0]" : ""
              }`}
            >
              <div className="flex items-baseline gap-0.5">
                <span className="text-[clamp(1.5rem,5vw,2.4rem)] font-extralight text-[#1A1A1A] leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-base font-light text-[#C4A882]">{stat.unit}</span>
              </div>
              <p className="text-[13px] sm:text-[14px] font-normal text-[#1A1A1A] tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        <Link
          href="/om-oss"
          className={`inline-flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase text-[#C4A882] hover:text-[#1A1A1A] transition-colors font-medium group anim-fade-in-up stagger-4 ${v}`}
        >
          {t.preview.readMore}
          <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>

      </div>
    </section>
  );
}
