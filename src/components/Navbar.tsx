
import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-8">
            {["Services", "Testimonials", "About", "Contact"].map((item) => (
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
      </div>
    </header>
  );
};

export default Navbar;
