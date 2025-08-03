const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground animate-fade-in">
          Ashwin
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in">
          Blockchain Developer | Ethereum | Solana
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button 
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
          >
            View Projects
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-outline"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;