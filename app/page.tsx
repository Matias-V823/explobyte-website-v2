import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ShowcaseSection } from "@/sections/ShowcaseSection";
import { TechStackSection } from "@/sections/TechStackSection";
import { CTASection } from "@/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
