"use client";

import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import FloatingChat from "../components/FloatingChat";

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
      <FooterSection />
      <FloatingChat />
    </main>
  );
}
