
import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/73b16301-5862-4c9a-81e3-5086231b3af6.png" 
            alt="Mega AI Logo" 
            className="w-12 h-12 animate-pulse"
          />
          <span className="text-xl font-bold text-white">Mega AI</span>
        </div>
        
        <div className="flex items-center gap-4">
          {isMobile ? (
            <div className="relative">
              <button 
                className="text-white p-2 rounded-md hover:bg-white/10 transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>

              {mobileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden animate-fade-in">
                  <div className="py-2">
                    {["Services", "Testimonials", "Mission", "About", "Contact"].map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="w-full text-left text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 transition-all block"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <NavigationMenu>
              <NavigationMenuList className="flex gap-8">
                {["Services", "Testimonials", "Mission", "About", "Contact"].map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-white/90 hover:text-white cursor-pointer px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                    >
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          )}
          
          <a 
            href="https://calendly.com/sankalpgour2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
