
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Mega AI transformed our customer service with their intelligent chatbots. Response times improved by 80%!",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GlobalCom",
    content: "The email automation tools have revolutionized our marketing campaigns. Engagement rates are through the roof!",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emma Davis",
    role: "Operations Manager, InnovateCo",
    content: "Workflow automation from Mega AI helped us save countless hours on repetitive tasks. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Alex Thompson",
    role: "Social Media Manager, BrandX",
    content: "Their X automation tools have made managing our social media presence so much easier and more effective.",
    image: "https://i.pravatar.cc/150?img=4"
  }
];

const TestimonialSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
          What Our Clients Say
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden gap-6 scroll-smooth px-4 pb-4"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-[400px] p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-purple-200"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
