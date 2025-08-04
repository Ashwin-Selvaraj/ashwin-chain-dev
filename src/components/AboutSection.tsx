import headshotImage from '@/assets/headshot.jpg';
import ashwinProfile from '@/assets/ashwinProfile.jpg';
import ProfileCard from './ProfileCard';
import ScrollVelocity from './ScrollVelocity';

const AboutSection = () => {
  const skills = [
    '💻 Ethereum 🌉 Base 🔷 Polygon 🟡 Binance 💠 TON ⚡ Solana 🔐 Smart Contracts 🧱 Layer 2 📜 Solidity 🦀 Rust 🧠 Tact 🌍 Web3',
    '⚛️ React 🌐 Next.js 🟨 JavaScript 🌿 Node.js 🍃 MongoDB ☁️ AWS 🧾 HTML 🎨 CSS ☕ Java'

  ];
  

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
          <div className="space-y-6">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                <span className="text-primary font-semibold">Hi, I'm Ashwin.</span>
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