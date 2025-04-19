
import { Brain, Sparkles, Rocket, Globe } from "lucide-react";
import { motion } from "framer-motion";

const MissionSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-900/20 via-black to-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Mission
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-purple-300">Revolutionizing Tomorrow</h3>
            <p className="text-gray-300 leading-relaxed">
              At Mega AI, we're on a mission to transform the way businesses operate through cutting-edge artificial intelligence. Our vision is to democratize AI technology, making powerful tools accessible to organizations of all sizes.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-purple-400">
                <Brain className="w-6 h-6" />
                <span>Pushing the boundaries of AI innovation</span>
              </div>
              <div className="flex items-center gap-3 text-purple-400">
                <Globe className="w-6 h-6" />
                <span>Global impact through local solutions</span>
              </div>
              <div className="flex items-center gap-3 text-purple-400">
                <Rocket className="w-6 h-6" />
                <span>Accelerating business growth</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-purple-900/50 to-black/50 p-8 rounded-lg border border-purple-500/20 backdrop-blur-sm">
              <Sparkles className="w-12 h-12 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-4 text-purple-200">Why Mega AI?</h4>
              <p className="text-gray-300 leading-relaxed">
                We believe in a future where AI enhances human potential rather than replacing it. Our solutions are designed to augment human capabilities, streamline operations, and drive innovation across industries.
              </p>
              <motion.div 
                className="mt-6 p-4 bg-purple-900/30 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-purple-200 font-medium">
                  "Empowering businesses with intelligent automation and strategic AI solutions for a smarter tomorrow."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
