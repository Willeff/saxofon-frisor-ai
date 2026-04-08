"use client";

import { useLanguage } from "../context/LanguageContext";

export default function WhySection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#111111] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-16 md:py-28">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="block w-10 h-px bg-[#C4A882]/35" />
              <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] font-light">
                {t.why.eyebrow}
              </p>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-light tracking-[0.02em] leading-[1.18] text-white">
              {t.why.heading.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
          </div>
          <a
            href="https://bestill.timma.no/saxofon"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto text-[12px] tracking-[0.18em] uppercase border border-white/15 px-6 py-3 text-white/70 font-medium hover:text-white hover:border-white/35 transition-all"
          >
            {t.why.book}
          </a>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06]">
          {t.why.features.map((f) => (
            <div
              key={f.num}
              className="bg-[#111111] px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-4 sm:gap-5 hover:bg-[#141414] transition-colors group"
            >
              <span className="text-[13px] text-[#C4A882]/80 font-normal tracking-widest">
                {f.num}
              </span>
              <h3 className="text-base sm:text-lg font-normal text-white tracking-wide group-hover:text-[#C4A882] transition-colors">
                {f.title}
              </h3>
              <p className="text-[15px] md:text-[16px] text-white/70 font-normal leading-[1.85]">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 md:mt-10 text-[12px] text-white/45 font-normal tracking-wide">
          {t.why.footnote}
        </p>

      </div>
    </section>
  );
}
