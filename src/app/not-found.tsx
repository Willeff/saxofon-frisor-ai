import Link from "next/link";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import FloatingChat from "./components/FloatingChat";

export default function NotFound() {
  return (
    <main className="bg-[#F7F4EF] min-h-screen flex flex-col">
      <Navbar variant="light" />

      <section className="flex-1 flex items-center justify-center px-6 py-20 md:py-28">
        <div className="max-w-2xl w-full text-center">

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-10 h-px bg-[#C4A882]/50" />
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] font-light">
              404
            </p>
            <span className="block w-10 h-px bg-[#C4A882]/50" />
          </div>

          <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-light tracking-wide text-[#1A1A1A] mb-5">
            Siden finnes ikke
          </h1>

          <p className="text-[15px] md:text-[16px] text-[#4A4540] font-normal leading-relaxed max-w-md mx-auto mb-10">
            Lenken er kanskje utdatert eller feilskrevet. Vi hjelper deg tilbake på rett spor.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="btn-press inline-block px-8 py-3.5 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              Til forsiden
            </Link>
            <Link
              href="/tjenester"
              className="btn-press inline-block px-8 py-3.5 bg-transparent border border-[#1A1A1A]/20 text-[#1A1A1A] text-[12px] tracking-[0.18em] uppercase font-medium hover:border-[#C4A882] hover:text-[#C4A882] transition-colors"
            >
              Se tjenester
            </Link>
            <Link
              href="/kontakt"
              className="btn-press inline-block px-8 py-3.5 bg-transparent border border-[#1A1A1A]/20 text-[#1A1A1A] text-[12px] tracking-[0.18em] uppercase font-medium hover:border-[#C4A882] hover:text-[#C4A882] transition-colors"
            >
              Kontakt oss
            </Link>
          </div>

        </div>
      </section>

      <FooterSection />
      <FloatingChat />
    </main>
  );
}
