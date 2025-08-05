import headshotImage from '@/assets/headshot.jpg';
import ashwinProfile from '@/assets/ashwinProfile.jpg';
import ProfileCard from './ProfileCard';
import ScrollVelocity from './ScrollVelocity';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const AboutSection = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px'
  });

  const skills = [
    '💻 Ethereum 🌉 Base 🔷 Polygon 🟡 Binance 💠 TON ⚡ Solana 🔐 Smart Contracts 🧱 Layer 2 📜 Solidity 🦀 Rust 🧠 Tact 🌍 Web3',
    '⚛️ React 🌐 Next.js 🟨 JavaScript 🌿 Node.js 🍃 MongoDB ☁️ AWS 🧾 HTML 🎨 CSS ☕ Java'

  ];
  

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={elementRef}
      id="about" 
      className={`py-12 md:py-20 px-4 md:px-6 relative transition-opacity duration-500 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Top gradient overlay for smooth transition from Hero section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      
      {/* Bottom gradient overlay for smooth transition to Projects section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      
      <div className="max-w-6xl mx-auto relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-gradient-primary">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Card */}
          <div className="flex justify-center md:justify-start">
            <ProfileCard
              name="ASHWIN"
              title="Blockchain Developer"
              handle="ashontech"
              status="Online"
              contactText="Contact Me"
              avatarUrl={ashwinProfile}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={handleContactClick}
            />
          </div>
          
          {/* Content */}
          <div className="space-y-4 md:space-y-6">
            <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-3 md:space-y-4">
            <h3>
              <span className="text-primary font-semibold">Blockchain developer building the future, one block at a time.</span>
            </h3>
            <p>
              Over 4 years of experience crafting smart contracts and scalable decentralized systems.
            </p>
            <p>
              From writing hundreds of contracts to organizing Ethereum community events, my focus is on developer experience, scalability, and cryptoeconomics.
            </p>

            </div>
            
            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-primary font-semibold">Skills & Technologies</h3>
              <ScrollVelocity
                texts={skills}
                velocity={50}
                className="text-xl font-bold text-foreground"
                numCopies={4}
                damping={100}
                stiffness={200}
                velocityMapping={{ input: [0, 200], output: [0, 1] }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;