import { ArrowDown, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from './AnimateOnScroll';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <AnimateOnScroll>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Ashwin
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Blockchain Developer | Ethereum | Solana
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Building decentralized solutions with a focus on scalability and security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-6 text-lg bg-gradient-to-r from-[#00dbde] to-[#fc00ff] hover:opacity-90 transition-opacity"
            >
              View Projects
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="px-8 py-6 text-lg border-2 hover:bg-gradient-to-r hover:from-[#00dbde] hover:to-[#fc00ff] hover:text-white transition-all"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/ashwin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:ashwin@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-all duration-300"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;