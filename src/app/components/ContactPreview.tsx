"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { pushEvent } from "../lib/analytics";
import { useInView } from "../hooks/useInView";

export default function ContactPreview() {
  const { t } = useLanguage();
  const c = t.contactSection;
  const { ref, inView } = useInView();
  const v = inView ? "in-view" : "";

  return (
    <section ref={ref} className="relative bg-[#171715] text-white py-14 md:py-20 px-6 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(196,168,130,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: text — each line animates individually */}
          <div>
            <p className={`text-[12px] tracking-[0.3em] uppercase text-[#C4A882] mb-3 anim-fade-in-up ${v}`}>
              {c.eyebrow}
            </p>
            <h2 className={`text-[clamp(1.6rem,3.5vw,2.6rem)] font-light tracking-wide leading-[1.2] mb-4 whitespace-pre-line anim-fade-in-up stagger-1 ${v}`}>
              {c.heading}
            </h2>
            <p className={`text-[15px] text-white/85 font-normal leading-[1.8] mb-6 max-w-md anim-fade-in-up stagger-2 ${v}`}>
              {c.body}
            </p>

            <div className={`flex flex-col sm:flex-row gap-3 mb-6 anim-fade-in-up stagger-3 ${v}`}>
              <a
                href="https://bestill.timma.no/saxofon"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pushEvent("booking_click", { location: "contact_preview" })}
                className="btn-press text-center px-8 py-3.5 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-white transition-colors"
              >
                {c.book}
              </a>
              <Link
                href="/kontakt"
                className="btn-press text-center px-8 py-3.5 border border-white/20 text-white/75 text-[12px] tracking-[0.18em] uppercase hover:border-white/40 hover:text-white transition-all"
              >
                {t.preview.contactUs}
              </Link>
            </div>
          </div>

          {/* Right: quick contact info */}
          <div className="flex flex-col gap-5">
            <a
              href="tel:+4745555898"
              onClick={() => pushEvent("phone_click", { location: "contact_preview", number: "+4745555898" })}
              className={`flex items-center gap-4 group anim-fade-in-up stagger-2 ${v}`}
            >
              <div className="w-10 h-10 border border-white/[0.1] flex items-center justify-center flex-none transition-colors duration-300 group-hover:border-[#C4A882]/40">
                <svg className="w-4 h-4 text-[#C4A882]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] tracking-[0.2em] uppercase text-white/60 font-normal mb-0.5">{c.phone}</p>
                <p className="text-[16px] font-light text-white/90 group-hover:text-[#C4A882] transition-colors">+47 455 55 898</p>
              </div>
            </a>
            <a
              href="https://maps.google.com/?q=Fredensborgveien+22,+Oslo,+Norway"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 group anim-fade-in-up stagger-3 ${v}`}
            >
              <div className="w-10 h-10 border border-white/[0.1] flex items-center justify-center flex-none transition-colors duration-300 group-hover:border-[#C4A882]/40">
                <svg className="w-4 h-4 text-[#C4A882]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] tracking-[0.2em] uppercase text-white/60 font-normal mb-0.5">{c.address}</p>
                <p className="text-[16px] font-light text-white/90 group-hover:text-[#C4A882] transition-colors">Fredensborgveien 22, Oslo</p>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
