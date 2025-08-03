import headshotImage from '@/assets/headshot.jpg';
import ParallaxCard from './ParallaxCard';
import AnimateOnScroll from './AnimateOnScroll';

const AboutSection = () => {
  const skills = [
    'Ethereum', 'Solana', 'Smart Contracts', 'React', 'Next.js', 'Layer 2', 'Web3'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <AnimateOnScroll>
            <div className="flex justify-center md:justify-start">
              <ParallaxCard>
                <img 
                  src={headshotImage} 
                  alt="Ashwin - Blockchain Developer" 
                  className="w-full h-full object-cover rounded-2xl absolute inset-0"
                />
              </ParallaxCard>
            </div>
          </AnimateOnScroll>
          
          {/* Content */}
          <AnimateOnScroll>
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  <span className="gradient-text font-semibold text-xl">Hi, I'm Ashwin.</span>
                </p>
                <p>
                  I am a blockchain developer with over 3 years of experience.
                </p>
                <p>
                  I have written hundreds of smart contracts, organized Ethereum and Bitcoin community events, and focus on developer experience, scalability, and cryptoeconomics.
                </p>
              </div>
              
              {/* Skills */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="gradient-border"
                    >
                      <div className="inner text-sm font-medium">
                        {skill}
                      </div>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;