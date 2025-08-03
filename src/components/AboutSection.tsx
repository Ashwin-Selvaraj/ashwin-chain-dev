import headshotImage from '@/assets/headshot.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-80 h-80 bg-muted rounded-lg overflow-hidden">
              <img 
                src={headshotImage} 
                alt="Ashwin - Blockchain Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="text-lg text-foreground leading-relaxed space-y-4">
              <p>
                <span className="font-semibold">Hi, I'm Ashwin.</span>
              </p>
              <p>
                I am a blockchain developer with over 3 years of experience.
              </p>
              <p>
                I have written hundreds of smart contracts, organized Ethereum and Bitcoin community events, and focus on developer experience, scalability, and cryptoeconomics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;