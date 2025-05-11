
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import TestimonialSection from "@/components/TestimonialSection";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { PhoneCall } from "lucide-react";

const Index = () => {
  const isMobile = useIsMobile();
  
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
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
      
      {/* Mobile Book Call button - positioned at the bottom of the page instead of fixed to viewport */}
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-40">
          <a 
            href="https://calendly.com/sankalpgour2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-full font-semibold shadow-lg hover:shadow-purple-500/20 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5 animate-pulse" />
              Book a Call
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Index;
