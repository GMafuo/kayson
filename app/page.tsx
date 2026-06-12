import { GsapSiteAnimations } from "@/components/animations/GsapSiteAnimations";
import { SiteNavigation } from "@/components/layout/Navigation";
import {
  AboutSection,
  ContactSection,
  DiscographySection,
  Footer,
  HeroSection,
  QuoteSection,
  UniverseSection,
} from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white text-black" data-gsap-root>
      <GsapSiteAnimations />
      <SiteNavigation />
      <HeroSection />
      <AboutSection />
      <UniverseSection />
      <QuoteSection />
      <DiscographySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
