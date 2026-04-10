"use client";

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

export default function ContactSection() {
  const { t } = useLanguage();
  const c = t.contactSection;
  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.1 });
  const { ref: trustRef, inView: trustInView } = useInView();
  const hv = headerInView ? "in-view" : "";

  return (
    <section id="kontakt" className="relative bg-[#0F0F0F] text-white py-24 md:py-32 px-6 overflow-hidden">
      {/* Film grain */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{ opacity: 0.032 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="contact-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#contact-grain)" />
      </svg>

      {/* Warm spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(196,168,130,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Top: Heading + body + CTA */}
        <div ref={headerRef} className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-x-20 mb-16 md:mb-20">
          {/* Left column — text animated individually */}
          <div>
            <p className={`text-[12px] tracking-[0.3em] uppercase text-[#C4A882] mb-4 anim-fade-in-up ${hv}`}>
              {c.eyebrow}
            </p>
            <h2 className={`text-[clamp(1.75rem,4vw,2.9rem)] font-light tracking-wide text-white leading-[1.2] mb-6 whitespace-pre-line anim-fade-in-up stagger-1 ${hv}`}>
              {c.heading}
            </h2>
            <p className={`text-[16px] md:text-[17px] text-white/85 font-normal leading-[1.8] max-w-md anim-fade-in-up stagger-2 ${hv}`}>
              {c.body}
            </p>
          </div>

          {/* Right column — primary CTA */}
          <div className={`flex flex-col justify-end anim-fade-in-up stagger-3 ${hv}`}>
            <div className="border border-white/[0.08] p-8 md:p-10 transition-colors duration-300 hover:border-white/[0.15]">
              <p className="text-[12px] tracking-[0.25em] uppercase text-[#C4A882] mb-3">
                {c.book}
              </p>
              <p className="text-[15px] text-white/75 font-normal mb-6 leading-relaxed">
                {c.bookSub}
              </p>
              <a
                href="https://bestill.timma.no/saxofon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-block w-full text-center px-8 py-4 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-white transition-colors"
              >
                {c.book}
              </a>
            </div>
          </div>
        </div>

        {/* Contact grid */}
        <div ref={gridRef} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] anim-fade-in-up ${gridInView ? "in-view" : ""}`}>
          {/* Phone */}
          <div className="bg-[#0F0F0F] p-6 md:p-8 flex flex-col transition-colors duration-300 hover:bg-[#141414]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-white/[0.1] flex items-center justify-center flex-none">
                <svg className="w-4 h-4 text-[#C4A882]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <p className="text-[12px] tracking-[0.2em] uppercase text-white/60 font-normal">
                {c.phone}
              </p>
            </div>
            <a
              href="tel:+4745555898"
              className="text-[17px] md:text-[18px] font-light text-white/90 hover:text-[#C4A882] transition-colors"
            >
              +47 455 55 898
            </a>
          </div>

          {/* Email */}
          <div className="bg-[#0F0F0F] p-6 md:p-8 flex flex-col transition-colors duration-300 hover:bg-[#141414]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-white/[0.1] flex items-center justify-center flex-none">
                <svg className="w-4 h-4 text-[#C4A882]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <p className="text-[12px] tracking-[0.2em] uppercase text-white/60 font-normal">
                {c.email}
              </p>
            </div>
            <a
              href="mailto:saxofon@hotmail.no"
              className="text-[17px] md:text-[18px] font-light text-white/90 hover:text-[#C4A882] transition-colors"
            >
              saxofon@hotmail.no
            </a>
          </div>

          {/* Address */}
          <div className="bg-[#0F0F0F] p-6 md:p-8 flex flex-col transition-colors duration-300 hover:bg-[#141414]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-white/[0.1] flex items-center justify-center flex-none">
                <svg className="w-4 h-4 text-[#C4A882]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <p className="text-[12px] tracking-[0.2em] uppercase text-white/60 font-normal">
                {c.address}
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Fredensborgveien+22,+Oslo,+Norway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] md:text-[18px] font-light text-white/90 hover:text-[#C4A882] transition-colors whitespace-pre-line"
            >
              {c.addressValue}
            </a>
          </div>

          {/* Hours */}
          <div className="bg-[#0F0F0F] p-6 md:p-8 flex flex-col transition-colors duration-300 hover:bg-[#141414]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-white/[0.1] flex items-center justify-center flex-none">
                <svg className="w-4 h-4 text-[#C4A882]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[12px] tracking-[0.2em] uppercase text-white/60 font-normal">
                {c.hours}
              </p>
            </div>
            <ul className="space-y-1.5">
              {c.days.map(({ day, time }) => (
                <li key={day} className="flex justify-between gap-4 text-[15px]">
                  <span className="text-white/85 font-normal">{day}</span>
                  <span className="text-white/60 font-normal">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust bar */}
        <div ref={trustRef} className={`mt-10 md:mt-12 flex items-center justify-center gap-3 anim-fade-in ${trustInView ? "in-view" : ""}`}>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-3.5 h-3.5 text-[#C4A882]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <GoogleG size={13} />
          <span className="text-white/75 text-[14px] font-normal">
            {c.trustLine}
          </span>
        </div>
      </div>
    </section>
  );
}
