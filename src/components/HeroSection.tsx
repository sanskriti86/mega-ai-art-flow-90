
import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; dx: number; dy: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#9b87f5";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Sparkles className="w-8 h-8 text-purple-400/50" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float delay-200">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-sm" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float delay-500">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-600/10 to-blue-600/10 rotate-45 blur-sm" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 mt-16">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600 animate-fade-in">
          Mega AI
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in delay-200">
          Transform your business with cutting-edge AI solutions. From voice bots to workflow automation,
          we bring intelligence to every interaction.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
