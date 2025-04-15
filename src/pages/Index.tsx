
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="testimonials">
        <TestimonialSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
