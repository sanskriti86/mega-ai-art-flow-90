
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div id="services" className="w-full">
        <ServicesSection />
      </div>
      <div id="mission" className="w-full">
        <MissionSection />
      </div>
      <div id="about" className="w-full">
        <AboutSection />
      </div>
      <div id="contact" className="w-full">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
