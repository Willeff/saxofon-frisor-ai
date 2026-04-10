"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

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
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <footer ref={ref} className="bg-[#0F0F0F] border-t border-white/[0.08] text-white px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">

        {/* Main grid — brand column is 2× wider */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-x-16 md:gap-y-12 mb-14 md:mb-20">

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className={`mb-7 md:mb-8 anim-fade-in-up ${inView ? "in-view" : ""}`}>
              <Image
                src="/saxofon-logo-transparent.svg"
                alt="Saxoføn Frisør"
                width={190}
                height={124}
                className="h-[58px] md:h-[72px] w-auto"
              />
            </div>

            {/* SEO / descriptor text */}
            <p className={`text-[15px] md:text-[16px] text-white/75 font-normal leading-[1.85] mb-7 md:mb-8 max-w-xs anim-fade-in-up stagger-1 ${inView ? "in-view" : ""}`}>
              {t.footer.seoText}
            </p>

            {/* Google rating */}
            <div className={`flex items-center gap-3 mb-8 md:mb-9 anim-fade-in-up stagger-2 ${inView ? "in-view" : ""}`}>
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
            <div className={`flex items-center gap-5 anim-fade-in-up stagger-3 ${inView ? "in-view" : ""}`}>
              <a href="https://www.facebook.com/saxofonfrisor" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-hover">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#1877F2" /><path d="M16.5 12.75h-2.25V18h-3v-5.25H9.75v-2.5h1.5V8.5c0-1.66 1-3 3.25-3H16v2.5h-1.25c-.55 0-.75.28-.75.7v1.55h2.25l-.75 2.5z" fill="#fff" /></svg>
              </a>
              <a href="https://www.instagram.com/saxofonfrisoer?igsh=eG1uNndzazUydGF5" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-hover">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none"><defs><radialGradient id="ig-grad-footer" cx="30%" cy="107%" r="150%"><stop offset="0%" stopColor="#fdf497" /><stop offset="5%" stopColor="#fdf497" /><stop offset="45%" stopColor="#fd5949" /><stop offset="60%" stopColor="#d6249f" /><stop offset="90%" stopColor="#285AEB" /></radialGradient></defs><rect width="24" height="24" rx="5" fill="url(#ig-grad-footer)" /><rect x="4.5" y="4.5" width="15" height="15" rx="4" stroke="#fff" strokeWidth="1.5" fill="none" /><circle cx="12" cy="12" r="3.5" stroke="#fff" strokeWidth="1.5" fill="none" /><circle cx="16.5" cy="7.5" r="1" fill="#fff" /></svg>
              </a>
              <a href="https://www.tiktok.com/@saxfoon" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-hover">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#010101" stroke="white" strokeWidth="0.5" /><path d="M16.5 5.5h-1.2v8.2a2.8 2.8 0 11-2.8-2.8c.2 0 .4 0 .6.1v1.6c-.2-.1-.4-.1-.6-.1a1.2 1.2 0 100 2.4c.7 0 1.3-.5 1.3-1.3V5.5h1.3c.1 1.4 1.2 2.5 2.6 2.6v1.6c-1-.1-1.9-.5-2.6-1.1v5.1A4.4 4.4 0 0111 18a4.4 4.4 0 01-4.3-4.3A4.4 4.4 0 0111 9.4v1.7a2.8 2.8 0 00-2.7 2.7 2.8 2.8 0 002.8 2.8c1.5 0 2.8-1.2 2.8-2.8V5.5h2.6z" fill="#fff" /><path d="M16.5 5.5c.1 1.4 1.2 2.5 2.6 2.6v1.6c-1-.1-1.9-.5-2.6-1.1" stroke="#25F4EE" strokeWidth="0.3" fill="none" /><path d="M13.9 13.7a2.8 2.8 0 01-2.8 2.5 2.8 2.8 0 01-2.8-2.8" stroke="#FE2C55" strokeWidth="0.3" fill="none" /></svg>
              </a>
              <a href="https://g.page/saxofonfrisor" target="_blank" rel="noopener noreferrer" aria-label="Google" className="social-hover">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#222" stroke="white/20" strokeWidth="0.5" /><path d="M18.82 12.1c0-.46-.04-.9-.12-1.33H12v2.51h3.84a3.28 3.28 0 01-1.42 2.15v1.79h2.3c1.35-1.24 2.1-3.07 2.1-5.12z" fill="#4285F4" /><path d="M12 19.5c1.93 0 3.54-.64 4.72-1.73l-2.3-1.79c-.64.43-1.46.68-2.42.68-1.86 0-3.43-1.26-3.99-2.94H5.63v1.85A7.13 7.13 0 0012 19.5z" fill="#34A853" /><path d="M8.01 13.72A4.28 4.28 0 017.78 12c0-.6.1-.93.23-1.36V8.79H5.63A7.13 7.13 0 004.87 12c0 1.15.28 2.24.76 3.21l2.38-1.49z" fill="#FBBC05" /><path d="M12 7.7c1.05 0 1.99.36 2.73 1.07l2.05-2.05A7.06 7.06 0 0012 4.5a7.13 7.13 0 00-6.37 3.93l2.38 1.85C8.57 8.96 10.14 7.7 12 7.7z" fill="#EA4335" /></svg>
              </a>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <p className={`text-[12px] tracking-[0.25em] uppercase text-[#C4A882] font-normal mb-6 md:mb-7 anim-fade-in-up stagger-2 ${inView ? "in-view" : ""}`}>
              {t.footer.contact}
            </p>
            <ul className={`space-y-4 text-[15px] md:text-[16px] text-white/80 font-normal anim-fade-in-up stagger-3 ${inView ? "in-view" : ""}`}>
              <li>
                <a
                  href="https://maps.google.com/?q=Fredensborgveien+22,+Oslo,+Norway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-250"
                >
                  {t.footer.address}
                </a>
              </li>
              <li>
                <a href="mailto:saxofon@hotmail.no" className="hover:text-white transition-colors duration-250">
                  saxofon@hotmail.no
                </a>
              </li>
              <li>
                <a href="tel:+4745555898" className="hover:text-white transition-colors duration-250">
                  +47 455 55 898
                </a>
              </li>
            </ul>
          </div>

          {/* Hours column */}
          <div>
            <p className={`text-[12px] tracking-[0.25em] uppercase text-[#C4A882] font-normal mb-6 md:mb-7 anim-fade-in-up stagger-4 ${inView ? "in-view" : ""}`}>
              {t.footer.hours}
            </p>
            <ul className={`space-y-4 text-[15px] md:text-[16px] text-white/80 font-normal anim-fade-in-up stagger-5 ${inView ? "in-view" : ""}`}>
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
        <div className={`border-t border-white/[0.08] pt-8 md:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 anim-fade-in stagger-6 ${inView ? "in-view" : ""}`}>

          {/* Left: copyright + Eleviad */}
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-white/50 font-normal">
              © {new Date().getFullYear()} Saxoføn Frisør. {t.footer.rights}
            </p>
            <p className="text-[13px] text-white/35 font-normal">
              {t.footer.developedBy}{" "}
              <a
                href="https://eleviad.no"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white/50 transition-colors duration-250"
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
            className="btn-press flex-none px-8 py-3.5 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-white transition-colors"
          >
            {t.footer.book}
          </a>

        </div>

      </div>
    </footer>
  );
}
