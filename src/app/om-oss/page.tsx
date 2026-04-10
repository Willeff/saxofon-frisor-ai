"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import FloatingChat from "../components/FloatingChat";

export default function OmOssPage() {
  const { t } = useLanguage();
  const body3 = (t.about as Record<string, unknown>).body3 as string | undefined;

  return (
    <main className="bg-[#F7F4EF]">
      <Navbar variant="light" />

      <section className="bg-[#F7F4EF]">
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-16 md:py-28">

          {/* Overline */}
          <div className="flex items-center gap-4 mb-10 md:mb-12">
            <span className="block w-10 h-px bg-[#C4A882]/50" />
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] font-light">
              {t.trust.eyebrow}
            </p>
          </div>

          {/* Two-column: heading+body left, image right */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 mb-12 md:mb-20 items-start">
            <div>
              <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-light tracking-[0.02em] leading-[1.18] text-[#1A1A1A] mb-6 md:mb-8">
                {t.trust.heading.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h1>
              <p className="text-[16px] text-[#4A4540] font-normal leading-[1.85] mb-5">
                {t.trust.body1}
              </p>
              <p className="text-[16px] text-[#4A4540] font-normal leading-[1.85] mb-5">
                {t.trust.body2}
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/saxofon-hero.jpg"
                alt="Saxofon Frisør salong"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>

          {/* Extended about content */}
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-light tracking-[0.02em] leading-[1.25] text-[#1A1A1A] mb-5">
              {t.about.heading.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p className="text-[16px] text-[#4A4540] font-normal leading-[1.85] mb-5">
              {t.about.body}
            </p>
            <p className="text-[16px] text-[#4A4540] font-normal leading-[1.85] mb-5">
              {t.about.body2}
            </p>
            {body3 && (
              <p className="text-[16px] text-[#4A4540] font-normal leading-[1.85] mb-5">
                {body3}
              </p>
            )}
            <a
              href="https://bestill.timma.no/saxofon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              {t.services.book}
            </a>
          </div>

          {/* Stat blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#E0D9D0] mb-14 md:mb-16">
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

          {/* Follow us */}
          <div className="border-t border-[#E0D9D0] pt-10">
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] font-light mb-6">
              {t.about.social}
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/saxofonfrisor" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-transform hover:scale-110">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#1877F2" /><path d="M16.5 12.75h-2.25V18h-3v-5.25H9.75v-2.5h1.5V8.5c0-1.66 1-3 3.25-3H16v2.5h-1.25c-.55 0-.75.28-.75.7v1.55h2.25l-.75 2.5z" fill="#fff" /></svg>
              </a>
              <a href="https://www.instagram.com/saxofonfrisoer?igsh=eG1uNndzazUydGF5" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:scale-110">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none"><defs><radialGradient id="ig-grad-about" cx="30%" cy="107%" r="150%"><stop offset="0%" stopColor="#fdf497" /><stop offset="5%" stopColor="#fdf497" /><stop offset="45%" stopColor="#fd5949" /><stop offset="60%" stopColor="#d6249f" /><stop offset="90%" stopColor="#285AEB" /></radialGradient></defs><rect width="24" height="24" rx="5" fill="url(#ig-grad-about)" /><rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="#fff" strokeWidth="1.5" fill="none" /><circle cx="12" cy="12" r="3.5" stroke="#fff" strokeWidth="1.5" fill="none" /><circle cx="16.5" cy="7.5" r="1" fill="#fff" /></svg>
              </a>
              <a href="https://www.tiktok.com/@saxfoon" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="transition-transform hover:scale-110">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#010101" /><path d="M16.5 5.5h-1.2v8.2a2.8 2.8 0 11-2.8-2.8c.2 0 .4 0 .6.1v1.6c-.2-.1-.4-.1-.6-.1a1.2 1.2 0 100 2.4c.7 0 1.3-.5 1.3-1.3V5.5h1.3c.1 1.4 1.2 2.5 2.6 2.6v1.6c-1-.1-1.9-.5-2.6-1.1v5.1A4.4 4.4 0 0111 18a4.4 4.4 0 01-4.3-4.3A4.4 4.4 0 0111 9.4v1.7a2.8 2.8 0 00-2.7 2.7 2.8 2.8 0 002.8 2.8c1.5 0 2.8-1.2 2.8-2.8V5.5h2.6z" fill="#fff" /><path d="M16.5 5.5c.1 1.4 1.2 2.5 2.6 2.6v1.6c-1-.1-1.9-.5-2.6-1.1" stroke="#25F4EE" strokeWidth="0.3" fill="none" /><path d="M13.9 13.7a2.8 2.8 0 01-2.8 2.5 2.8 2.8 0 01-2.8-2.8" stroke="#FE2C55" strokeWidth="0.3" fill="none" /></svg>
              </a>
              <a href="https://g.page/saxofonfrisor" target="_blank" rel="noopener noreferrer" aria-label="Google" className="transition-transform hover:scale-110">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#fff" stroke="#E0D9D0" strokeWidth="0.5" /><path d="M18.82 12.1c0-.46-.04-.9-.12-1.33H12v2.51h3.84a3.28 3.28 0 01-1.42 2.15v1.79h2.3c1.35-1.24 2.1-3.07 2.1-5.12z" fill="#4285F4" /><path d="M12 19.5c1.93 0 3.54-.64 4.72-1.73l-2.3-1.79c-.64.43-1.46.68-2.42.68-1.86 0-3.43-1.26-3.99-2.94H5.63v1.85A7.13 7.13 0 0012 19.5z" fill="#34A853" /><path d="M8.01 13.72A4.28 4.28 0 017.78 12c0-.6.1-.93.23-1.36V8.79H5.63A7.13 7.13 0 004.87 12c0 1.15.28 2.24.76 3.21l2.38-1.49z" fill="#FBBC05" /><path d="M12 7.7c1.05 0 1.99.36 2.73 1.07l2.05-2.05A7.06 7.06 0 0012 4.5a7.13 7.13 0 00-6.37 3.93l2.38 1.85C8.57 8.96 10.14 7.7 12 7.7z" fill="#EA4335" /></svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      <FooterSection />
      <FloatingChat />
    </main>
  );
}
