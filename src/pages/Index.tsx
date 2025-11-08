import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import FeaturesSection from "@/components/FeaturesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhySection />
      <FeaturesSection />
      <AdvantagesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
