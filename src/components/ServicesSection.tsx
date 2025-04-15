
import { Bot, Mail, MessageCircle, Share2, Workflow, Zap, Globe, Rocket } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Voice Bots",
    description: "Natural conversations powered by advanced AI technology.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverColor: "hover:bg-purple-200"
  },
  {
    icon: MessageCircle,
    title: "Chatbots",
    description: "24/7 customer support with intelligent chat automation.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverColor: "hover:bg-blue-200"
  },
  {
    icon: Share2,
    title: "X Automation",
    description: "Streamline your Twitter presence with smart automation tools.",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    hoverColor: "hover:bg-pink-200"
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Personalized email campaigns that drive engagement.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    hoverColor: "hover:bg-green-200"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Optimize your business processes with AI-driven workflows.",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    hoverColor: "hover:bg-orange-200"
  },
  {
    icon: Rocket,
    title: "Strategic AI",
    description: "Advanced AI solutions for strategic business growth.",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    hoverColor: "hover:bg-indigo-200"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in ${service.hoverColor}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 animate-pulse`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
