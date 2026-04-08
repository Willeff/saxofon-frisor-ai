"use client";

import { useLanguage } from "../context/LanguageContext";

export default function TrustSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F7F4EF]">
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-16 md:py-28">

        {/* Overline */}
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <span className="block w-10 h-px bg-[#C4A882]/50" />
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] font-light">
            {t.trust.eyebrow}
          </p>
        </div>

        {/* Two-column: heading + body */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 mb-12 md:mb-20">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-light tracking-[0.02em] leading-[1.18] text-[#1A1A1A]">
            {t.trust.heading.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <div className="flex flex-col justify-center">
            <p className="text-[16px] text-[#4A4540] font-normal leading-[1.85] mb-5">
              {t.trust.body1}
            </p>
            <p className="text-[16px] text-[#4A4540] font-normal leading-[1.85]">
              {t.trust.body2}
            </p>
          </div>
        </div>

        {/* Stat blocks — stacks to 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#E0D9D0]">
          {t.trust.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-3 ${
                i < t.trust.stats.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-[#E0D9D0]"
                  : ""
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-[clamp(2.2rem,8vw,3.6rem)] font-extralight text-[#1A1A1A] leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xl font-light text-[#C4A882]">
                  {stat.unit}
                </span>
              </div>
              <p className="text-[16px] font-normal text-[#1A1A1A] tracking-wide">
                {stat.label}
              </p>
              <p className="text-[13px] text-[#1A1A1A]/70 font-normal tracking-wide leading-snug">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
