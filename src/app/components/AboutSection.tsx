"use client";

import { useLanguage } from "../context/LanguageContext";

const GoogleG = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden className="flex-none">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

export default function AboutSection() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="om-oss" className="relative bg-[#0F0F0F] text-white py-24 md:py-32 px-6 overflow-hidden">
      {/* Film grain */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{ opacity: 0.032 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="about-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#about-grain)" />
      </svg>

      {/* Subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 70% 15%, rgba(196,168,130,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-20 max-w-xl">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] mb-4">
            {a.eyebrow}
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.9rem)] font-light tracking-wide text-white leading-[1.2] mb-6 whitespace-pre-line">
            {a.heading}
          </h2>
          <p className="text-[16px] md:text-[17px] text-white/65 font-normal leading-[1.8] mb-4">
            {a.body}
          </p>
          <p className="text-[16px] md:text-[17px] text-white/65 font-normal leading-[1.8]">
            {a.body2}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] mb-14 md:mb-20">
          {a.stats.map((stat) => (
            <div key={stat.label} className="bg-[#0F0F0F] p-6 md:p-8">
              <p className="text-[28px] md:text-[32px] font-light text-white mb-2 tracking-wide">
                {stat.value}
              </p>
              <p className="text-[14px] text-white/45 font-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <p className="text-[12px] tracking-[0.25em] uppercase text-white/30 font-normal">
            {a.social}
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/saxofonfrisor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/35 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/saxofonfrisoer?igsh=eG1uNndzazUydGF5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/35 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" strokeWidth="2.5"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@saxfoon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white/35 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
              </svg>
            </a>
            <a
              href="https://g.page/saxofonfrisor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className="opacity-40 hover:opacity-100 transition-opacity"
            >
              <GoogleG size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
