import { ArrowDown, Github, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import SilkBackground from './SilkBackground';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import RotatingText from './RotatingText';

const HeroSection = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px'
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={elementRef}
      id="hero" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <SilkBackground 
        speed={1}
        scale={0.8}
        color="#4c1d95"
        noiseIntensity={0.8}
        rotation={0.05}
      />
      <ParticleBackground />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/60" />
      
      {/* Bottom gradient overlay for smooth transition to About section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient-primary animate-glow">Ashwin</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in [animation-delay:0.3s] flex flex-wrap items-center justify-center gap-2">
          <span className="text-gradient-primary">Blockchain Developer</span> 
          <span className="text-muted-foreground">|</span>
          <RotatingText
            texts={[
              "Ethereum",
              "Binance Smart Chain",
              "Solana",
              "Polygon",
              "Base",
              "TON"
            ]}
            mainClassName="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-white font-medium inline-flex items-center"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in [animation-delay:0.6s]">
          Building decentralized solutions with a focus on scalability and security.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in [animation-delay:0.9s]">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="btn-hero"
          >
            View Projects
          </Button>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-outline"
          >
            Contact Me
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in [animation-delay:1.2s]">
          <a 
            href="https://github.com/Ashwin-Selvaraj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a 
            href="mailto:ashwin240899@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-all duration-300 animate-float"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;