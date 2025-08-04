import headshotImage from '@/assets/headshot.jpg';
import ashwinProfile from '@/assets/ashwinProfile.jpg';
import ProfileCard from './ProfileCard';

const AboutSection = () => {
  const skills = [
    'Ethereum', 'Solana', 'Smart Contracts', 'React', 'Next.js', 'Layer 2', 'Web3'
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
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;