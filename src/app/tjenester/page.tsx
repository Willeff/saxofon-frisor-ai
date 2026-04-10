"use client";

import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import ServiceFAQ from "../components/ServiceFAQ";
import FooterSection from "../components/FooterSection";
import FloatingChat from "../components/FloatingChat";

export default function TjenesterPage() {
  return (
    <main>
      <Navbar variant="light" />
      <ServicesSection isFullPage />
      <ServiceFAQ />
      <FooterSection />
      <FloatingChat />
    </main>
  );
}
