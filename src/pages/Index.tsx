
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  // Ensure smooth scrolling behavior
  useEffect(() => {
    // Fix for mobile browsers that don't support smooth scrolling
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div id="services" className="w-full pt-16">
        <ServicesSection />
      </div>
      <div id="testimonials" className="w-full pt-16">
        <TestimonialSection />
      </div>
      <div id="mission" className="w-full pt-16">
        <MissionSection />
      </div>
      <div id="about" className="w-full pt-16">
        <AboutSection />
      </div>
      <div id="contact" className="w-full pt-16">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
