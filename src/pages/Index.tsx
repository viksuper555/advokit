import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import FeaturesSection from "@/components/FeaturesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import UIPreviewSection from "@/components/UIPreviewSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Handle hash navigation when landing on home page
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="why">
        <WhySection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="advantages">
        <AdvantagesSection />
      </div>
      <UIPreviewSection />
      <div id="about">
        <AboutSection />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
