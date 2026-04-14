"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <section className="relative bg-[#0F0F0F] text-white min-h-[100svh] flex flex-col">

      {/* Layer 1: Warm spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 5%, rgba(196,168,130,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Layer 2: Cool depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 40% at 50% 110%, rgba(10,8,6,0.8) 0%, transparent 70%)",
        }}
      />

      {/* Layer 3: Film grain */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{ opacity: 0.038 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Navigation */}
      <nav className={`relative z-20 py-4 anim-fade-in ${mounted ? "in-view" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between relative">

          {/* Logo */}
          <a href="#" aria-label="Saxoføn Frisør – tilbake til toppen" className="flex-none">
            <Image
              src="/saxofon-logo-transparent.svg"
              alt="Saxoføn Frisør"
              width={206}
              height={135}
              priority
              className="h-[52px] md:h-[72px] w-auto"
            />
          </a>

          {/* Desktop: Nav links centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {[
              { label: t.nav.home, href: "/" },
              { label: t.nav.about, href: "/om-oss" },
              { label: t.nav.services, href: "/tjenester" },
              { label: t.nav.contact, href: "/kontakt" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="nav-link-underline text-[12px] tracking-widest uppercase text-white/75 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop: Language + CTA */}
          <div className="hidden md:flex flex-none items-center gap-5">
            <LanguageSwitcher />
            <a
              href="https://bestill.timma.no/saxofon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press text-[12px] tracking-widest uppercase bg-[#E8D5B5] text-[#0F0F0F] px-5 py-2.5 hover:bg-[#F0E4CC] transition-colors font-medium"
            >
              {t.nav.book}
            </a>
          </div>

          {/* Mobile: Hamburger (only visible when menu is closed) */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Åpne meny"
          >
            <span className="block w-6 h-px bg-white transition-all duration-300" />
            <span className="block w-6 h-px bg-white transition-all duration-300" />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-100 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div className="absolute inset-0 bg-[#0F0F0F] flex flex-col">
          {/* Film grain overlay */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 w-full h-full"
            style={{ opacity: 0.03 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="menu-grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#menu-grain)" />
          </svg>

          {/* Warm spotlight gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 80% 20%, rgba(196,168,130,0.06) 0%, transparent 60%)",
            }}
          />

          {/* Menu header — logo + close */}
          <div className="relative flex items-center justify-between px-6 py-4">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              aria-label="Saxoføn Frisør – tilbake til toppen"
              className="flex-none"
            >
              <Image
                src="/saxofon-logo-transparent.svg"
                alt="Saxoføn Frisør"
                width={206}
                height={135}
                className="h-[52px] w-auto"
              />
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Lukk meny"
              className="p-2 -mr-2 transition-transform duration-200 active:scale-90"
            >
              <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu content */}
          <div className="relative flex-1 flex flex-col px-8 pt-6 pb-10">

            {/* Nav links */}
            <nav className="flex flex-col gap-1 mb-auto">
              {[
                { label: t.nav.home, href: "/" },
                { label: t.nav.about, href: "/om-oss" },
                { label: t.nav.services, href: "/tjenester" },
                { label: t.nav.contact, href: "/kontakt" },
              ].map(({ label, href }, i) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center py-4 border-b border-white/[0.06]"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${150 + i * 60}ms, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${150 + i * 60}ms`,
                  }}
                >
                  <span className="text-[13px] text-[#C4A882]/50 font-normal mr-5 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[22px] font-light tracking-wide text-white/85 group-hover:text-white transition-colors">
                    {label}
                  </span>
                </a>
              ))}

            </nav>

            {/* Bottom section */}
            <div
              className="mt-12 flex flex-col gap-8"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1) 400ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) 400ms",
              }}
            >

              {/* Spør assistenten */}
              <button
                onClick={() => { setMenuOpen(false); window.dispatchEvent(new CustomEvent("open-chat")); }}
                className="btn-press flex items-center justify-center gap-2 w-full text-center px-8 py-4 border border-white/20 text-white/75 text-[12px] tracking-[0.18em] uppercase hover:border-white/40 hover:text-white transition-all"
              >
                <svg className="w-3.5 h-3.5 flex-none" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {t.hero.findTreatment}
              </button>

              {/* Language */}
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#C4A882]/60 mb-4">
                  Language
                </p>
                <LanguageSwitcher inline />
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06]" />

              {/* CTA */}
              <a
                href="https://bestill.timma.no/saxofon"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-press w-full text-center px-8 py-4 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-white transition-colors"
              >
                {t.nav.book}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 overflow-hidden">

        {/* Eyebrow */}
        <div className={`flex items-center gap-3 md:gap-4 mb-5 md:mb-7 anim-fade-in-up hero-stagger-1 ${mounted ? "in-view" : ""}`}>
          <span className="block w-8 md:w-10 h-px bg-[#C4A882]/40" />
          <p className="text-[11px] md:text-[12px] tracking-[0.32em] md:tracking-[0.35em] uppercase text-[#C4A882] font-light">
            {t.hero.eyebrow}
          </p>
          <span className="block w-8 md:w-10 h-px bg-[#C4A882]/40" />
        </div>

        {/* Headline */}
        <h1 className={`text-[clamp(2rem,5.5vw,3.8rem)] font-light tracking-[0.01em] leading-[1.18] mb-4 md:mb-5 text-white max-w-2xl anim-fade-in-up hero-stagger-2 ${mounted ? "in-view" : ""}`}>
          {t.hero.headlineL1}
          <br />
          {t.hero.headlineL2}
        </h1>

        {/* Subtitle */}
        <p className={`text-[16px] md:text-[17px] text-white/75 font-light max-w-sm md:max-w-md mx-auto mb-7 md:mb-9 leading-relaxed tracking-wide anim-fade-in-up hero-stagger-3 ${mounted ? "in-view" : ""}`}>
          {t.hero.subtitle}
        </p>

        {/* Trust row */}
        <div className={`mb-9 md:mb-11 flex flex-col items-center gap-2 anim-fade-in-up hero-stagger-4 ${mounted ? "in-view" : ""}`}>
          {/* Stars */}
          <div className="flex items-center gap-1 md:gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-4.5 h-4.5 md:w-4 md:h-4 text-[#C4A882]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          {/* Rating + Google logo */}
          <div className="flex items-center gap-1.5 justify-center">
            <svg width="14" height="14" viewBox="0 0 18 18" aria-label="Google" role="img" className="flex-none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            <span className="text-white font-medium text-[15px]">{t.hero.rating}</span>
          </div>
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-none sm:w-auto mb-3 md:mb-4 anim-fade-in-up hero-stagger-5 ${mounted ? "in-view" : ""}`}>
          <a
            href="https://bestill.timma.no/saxofon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press px-8 md:px-10 py-4 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-white transition-colors text-center"
          >
            {t.hero.book}
          </a>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
            className="btn-press flex items-center justify-center gap-2 px-8 md:px-10 py-4 border border-white/20 text-white/75 text-[12px] tracking-[0.18em] uppercase hover:border-white/40 hover:text-white transition-all"
          >
            <svg className="w-3.5 h-3.5 flex-none" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {t.hero.findTreatment}
          </button>
        </div>

      </div>

    </section>
  );
}
