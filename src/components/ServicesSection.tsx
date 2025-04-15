
import { Bot, Mail, MessageCircle, Share2, Workflow } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Voice Bots",
    description: "Natural conversations powered by advanced AI technology."
  },
  {
    icon: MessageCircle,
    title: "Chatbots",
    description: "24/7 customer support with intelligent chat automation."
  },
  {
    icon: Share2,
    title: "X Automation",
    description: "Streamline your Twitter presence with smart automation tools."
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Personalized email campaigns that drive engagement."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Optimize your business processes with AI-driven workflows."
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
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 animate-pulse">
                <service.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
