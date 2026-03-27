import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialGary from "@/components/TestimonialGary";
import CopywritingSection from "@/components/CopywritingSection";
import WebDesignSlider from "@/components/WebDesignSlider";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialJohn from "@/components/TestimonialJohn";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialGary />
      <CopywritingSection />
      <WebDesignSlider />
      <CaseStudiesSection />
      <TestimonialJohn />
      <ContactFooter />
    </main>
  );
}
