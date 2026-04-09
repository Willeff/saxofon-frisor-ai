"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const isLight = variant === "light";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/om-oss" },
    { label: t.nav.services, href: "/tjenester" },
    { label: t.nav.contact, href: "/kontakt" },
  ];

  return (
    <nav className={`relative z-10 py-4 bg-transparent ${isLight ? "" : "text-white"}`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between relative">

        {/* Logo */}
        <Link href="/" aria-label="Saxoføn Frisør – hjem" className="flex-none">
          <Image
            src={isLight ? "/logo-sort.svg" : "/saxofon-logo-transparent.svg"}
            alt="Saxoføn Frisør"
            width={206}
            height={135}
            priority
            className="h-[52px] md:h-[72px] w-auto"
          />
        </Link>

        {/* Desktop: Nav links centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-[12px] tracking-widest uppercase transition-colors ${
                isLight
                  ? "text-[#4A4540] hover:text-[#1A1A1A]"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop: Language + CTA */}
        <div className="hidden md:flex flex-none items-center gap-5">
          <LanguageSwitcher variant={variant} />
          <a
            href="https://bestill.timma.no/saxofon"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[12px] tracking-widest uppercase px-5 py-2.5 transition-colors font-medium ${
              isLight
                ? "bg-[#C4A882] text-[#0F0F0F] hover:bg-[#1A1A1A] hover:text-white"
                : "bg-[#E8D5B5] text-[#0F0F0F] hover:bg-[#F0E4CC]"
            }`}
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Åpne meny"
        >
          <span className={`block w-6 h-px ${isLight ? "bg-[#1A1A1A]" : "bg-white"}`} />
          <span className={`block w-6 h-px ${isLight ? "bg-[#1A1A1A]" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile fullscreen menu (always dark) */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-100 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        <div className="absolute inset-0 bg-[#0F0F0F] flex flex-col">
          <svg aria-hidden className="pointer-events-none absolute inset-0 w-full h-full" style={{ opacity: 0.03 }} xmlns="http://www.w3.org/2000/svg">
            <filter id="nav-grain"><feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
            <rect width="100%" height="100%" filter="url(#nav-grain)" />
          </svg>
          <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 80% 20%, rgba(196,168,130,0.06) 0%, transparent 60%)" }} />

          {/* Header */}
          <div className="relative flex items-center justify-between px-6 py-4">
            <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Saxoføn Frisør – hjem" className="flex-none">
              <Image src="/saxofon-logo-transparent.svg" alt="Saxoføn Frisør" width={206} height={135} className="h-[52px] w-auto" />
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Lukk meny" className="p-2 -mr-2">
              <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="relative flex-1 flex flex-col px-8 pt-6 pb-10">
            <nav className="flex flex-col gap-1 mb-auto">
              {navLinks.map(({ label, href }, i) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center py-4 border-b border-white/[0.06]"
                >
                  <span className="text-[13px] text-[#C4A882]/50 font-normal mr-5 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[22px] font-light tracking-wide text-white/85 group-hover:text-white transition-colors">
                    {label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-12 flex flex-col gap-8">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#C4A882]/60 mb-4">Language</p>
                <LanguageSwitcher inline />
              </div>
              <div className="h-px bg-white/[0.06]" />
              <a
                href="https://bestill.timma.no/saxofon"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center px-8 py-4 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-white transition-colors"
              >
                {t.nav.book}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
