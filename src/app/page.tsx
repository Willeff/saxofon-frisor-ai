import HeroSection from "./components/HeroSection";
import TrustPreview from "./components/TrustPreview";
import ServicesPreview from "./components/ServicesPreview";
import ReviewsPreview from "./components/ReviewsPreview";
import MiniFAQ from "./components/MiniFAQ";
import ContactPreview from "./components/ContactPreview";
import FooterSection from "./components/FooterSection";
import FloatingChat from "./components/FloatingChat";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustPreview />
      <ServicesPreview />
      <ReviewsPreview />
      <MiniFAQ />
      <ContactPreview />
      <FooterSection />
      <FloatingChat />
    </main>
  );
}
