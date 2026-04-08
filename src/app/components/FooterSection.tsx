"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const GoogleG = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden className="flex-none">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

export default function FooterSection() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0F0F0F] border-t border-white/[0.08] text-white px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">

        {/* Main grid — brand column is 2× wider */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-x-16 md:gap-y-12 mb-14 md:mb-20">

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="mb-7 md:mb-8">
              <Image
                src="/saxofon-logo-transparent.svg"
                alt="Saxoføn Frisør"
                width={190}
                height={124}
                className="h-[48px] md:h-[58px] w-auto"
              />
            </div>

            {/* SEO / descriptor text */}
            <p className="text-[15px] md:text-[16px] text-white/75 font-normal leading-[1.85] mb-7 md:mb-8 max-w-xs">
              {t.footer.seoText}
            </p>

            {/* Google rating */}
            <div className="flex items-center gap-3 mb-8 md:mb-9">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#C4A882]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <GoogleG size={13} />
                <span className="text-white/75 text-[15px] font-normal">
                  4.9 · 681 {t.footer.reviews}
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/saxofonfrisor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 hover:text-white transition-colors"
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
                className="text-white/40 hover:text-white transition-colors"
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
                className="text-white/40 hover:text-white transition-colors"
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
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <GoogleG size={18} />
              </a>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-[12px] tracking-[0.25em] uppercase text-[#C4A882] font-normal mb-6 md:mb-7">
              {t.footer.contact}
            </p>
            <ul className="space-y-4 text-[15px] md:text-[16px] text-white/80 font-normal">
              <li>
                <a
                  href="https://maps.google.com/?q=Fredensborgveien+22,+Oslo,+Norway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.address}
                </a>
              </li>
              <li>
                <a href="mailto:saxofon@hotmail.no" className="hover:text-white transition-colors">
                  saxofon@hotmail.no
                </a>
              </li>
              <li>
                <a href="tel:+4745555898" className="hover:text-white transition-colors">
                  +47 455 55 898
                </a>
              </li>
            </ul>
          </div>

          {/* Hours column */}
          <div>
            <p className="text-[12px] tracking-[0.25em] uppercase text-[#C4A882] font-normal mb-6 md:mb-7">
              {t.footer.hours}
            </p>
            <ul className="space-y-4 text-[15px] md:text-[16px] text-white/80 font-normal">
              {t.footer.days.map(({ day, time }) => (
                <li key={day} className="flex justify-between gap-6 max-w-[240px]">
                  <span>{day}</span>
                  <span className="text-white/50">{time}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-8 md:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

          {/* Left: copyright + Eleviad */}
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-white/50 font-normal">
              © {new Date().getFullYear()} Saxoføn Frisør. {t.footer.rights}
            </p>
            <p className="text-[13px] text-white/35 font-normal">
              Utviklet av{" "}
              <a
                href="https://eleviad.no"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white/50 transition-colors"
              >
                Eleviad
              </a>
            </p>
          </div>

          {/* Right: book CTA */}
          <a
            href="https://bestill.timma.no/saxofon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none px-8 py-3.5 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-white transition-colors"
          >
            {t.footer.book}
          </a>

        </div>

      </div>
    </footer>
  );
}
