"use client";

import { useLanguage } from "../context/LanguageContext";

const BRANDS = [
  { name: "Matrix" },
  { name: "Schwarzkopf Professional" },
  { name: "REF Stockholm" },
  { name: "Cutrin" },
  { name: "L'Oréal Professionnel" },
  { name: "Re-Born Hairsolutions" },
];

export default function BrandsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#111111] border-t border-white/[0.05] py-14 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-4 mb-5 md:mb-6">
            <span className="block w-10 h-px bg-[#C4A882]/35" />
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] font-light">
              {t.brands.eyebrow}
            </p>
          </div>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-light tracking-[0.02em] leading-[1.2] text-white mb-4">
            {t.brands.heading}
          </h2>
          <p className="text-[15px] text-white/65 font-normal max-w-md leading-relaxed">
            {t.brands.body}
          </p>
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.05]">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-[#111111] px-5 py-6 sm:px-7 sm:py-8 flex items-center hover:bg-[#141414] transition-colors group"
            >
              <span className="text-[15px] sm:text-[16px] font-normal text-white/70 tracking-wide group-hover:text-white/90 transition-colors leading-snug">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
