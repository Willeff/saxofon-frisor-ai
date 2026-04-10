"use client";

import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import FloatingChat from "../components/FloatingChat";
import { useLanguage } from "../context/LanguageContext";

const KONTAKT_FAQ = {
  no: [
    { q: "Hvor ligger salongen?", a: "Vi holder til i Fredensborgveien 22 på St. Hanshaugen, like ved Bislett. Lett tilgjengelig med buss og trikk fra hele sentrale Oslo." },
    { q: "Kan jeg bare stikke innom?", a: "Drop-in er velkommen hvis vi har ledig kapasitet, men vi anbefaler å bestille time for å sikre deg en plass." },
    { q: "Hva er åpningstidene?", a: "Vi har åpent mandag til lørdag kl. 10–18. Søndag er vi stengt." },
  ],
  en: [
    { q: "Where is the salon located?", a: "We're at Fredensborgveien 22 on St. Hanshaugen, near Bislett. Easy to reach by bus and tram from central Oslo." },
    { q: "Can I just drop in?", a: "Walk-ins are welcome if we have availability, but we recommend booking to secure your spot." },
    { q: "What are the opening hours?", a: "We're open Monday to Saturday 10–18. Closed on Sundays." },
  ],
  ar: [
    { q: "أين يقع الصالون؟", a: "نقع في Fredensborgveien 22 في St. Hanshaugen، بالقرب من Bislett. يسهل الوصول بالحافلة والترام." },
    { q: "هل يمكنني الزيارة بدون موعد؟", a: "الزيارة بدون موعد مرحب بها إذا كانت لدينا أماكن متاحة، لكن ننصح بالحجز." },
    { q: "ما هي ساعات العمل؟", a: "الاثنين إلى السبت 10-18. الأحد مغلق." },
  ],
  es: [
    { q: "¿Dónde está el salón?", a: "Estamos en Fredensborgveien 22 en St. Hanshaugen, cerca de Bislett. Fácil de llegar en autobús y tranvía." },
    { q: "¿Puedo ir sin cita?", a: "Las visitas sin cita son bienvenidas si hay disponibilidad, pero recomendamos reservar." },
    { q: "¿Cuál es el horario?", a: "Lunes a sábado de 10 a 18. Domingos cerrado." },
  ],
};

function KontaktFAQ() {
  const { lang } = useLanguage();
  const items = KONTAKT_FAQ[lang];

  return (
    <div className="relative z-[1] max-w-5xl mx-auto px-6 pb-16 md:pb-20">
      <div className="max-w-2xl">
        <p className="text-[12px] tracking-[0.25em] uppercase text-[#C4A882] mb-5">
          {lang === "no" ? "Praktisk info" : lang === "en" ? "Practical info" : lang === "ar" ? "معلومات عملية" : "Info práctica"}
        </p>
        <div className="divide-y divide-white/[0.08]">
          {items.map((item, i) => (
            <div key={i} className="py-4">
              <p className="text-[15px] font-normal text-white/90 mb-1.5">{item.q}</p>
              <p className="text-[14px] text-white/60 font-normal leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function KontaktPage() {
  return (
    <main className="relative bg-[#0F0F0F]">
      {/* Shared grain + spotlight that covers navbar + contact section */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        style={{ opacity: 0.032 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="page-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#page-grain)" />
      </svg>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(196,168,130,0.06) 0%, transparent 60%)",
        }}
      />

      <Navbar />
      <ContactSection />
      <KontaktFAQ />
      <FooterSection />
      <FloatingChat />
    </main>
  );
}
