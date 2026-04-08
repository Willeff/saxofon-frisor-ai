import HeroSection from "./components/HeroSection";
import AssistantChat from "./components/AssistantChat";
import TrustSection from "./components/TrustSection";
import WhySection from "./components/WhySection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import BrandsSection from "./components/BrandsSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import FloatingChat from "./components/FloatingChat";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AssistantChat />
      <TrustSection />
      <WhySection />
      <ServicesSection />
      <AboutSection />
      <BrandsSection />
      <ReviewsSection />
      <ContactSection />
      <FooterSection />
      <FloatingChat />
    </main>
  );
}
