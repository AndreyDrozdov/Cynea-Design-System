import { Navigation } from "./components/landing/Navigation";
import { HeroSection } from "./components/landing/HeroSection";
import { RescueProcessSection } from "./components/landing/RescueProcessSection";
// import { MissionSection } from "./components/landing/MissionSection";
import { ServicesSection } from "./components/landing/ServicesSection";
import { ImpactSection } from "./components/landing/ImpactSection";
import { CTASection } from "./components/landing/CTASection";
import { Footer } from "./components/landing/Footer";
import { DemosSection } from "./components/landing/DemosSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* HeroSection starts at the top to provide background behind the floating navigation */}
      <HeroSection />
      <RescueProcessSection />
      {/* <MissionSection /> */}
      <ServicesSection />
      <DemosSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </div>
  );
}