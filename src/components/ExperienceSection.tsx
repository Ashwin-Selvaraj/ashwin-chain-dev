import { Calendar, MapPin } from 'lucide-react';
import TargetCursor from './TargetCursor';

const ExperienceSection = () => {
  const experiences = [
    {
      year: "Sep 2024 – Present",
      title: "Development Team Lead",
      company: "Throughbit Technologies Pvt Ltd",
      location: "Coimbatore, India (On-site)",
      description:
        "Promoted to Team Lead for driving innovation in multi-chain dApps and leading blockchain solutions. Overseeing a team building products on Ethereum, TON, Polygon, and Base. Focused on scalability, protocol integrations, and smart contract architecture."
    },
    {
      year: "May 2024 – Sep 2024",
      title: "Full Stack Blockchain Developer",
      company: "Throughbit Technologies Pvt Ltd",
      location: "Coimbatore, India (On-site)",
      description:
        "Worked across Base, Binance Smart Chain, Ethereum, TON, and Polygon ecosystems. Built NFT minting platforms, token utilities, and multi-chain dApp dashboards to enhance user experience and protocol interaction."
    },
    {
      year: "2024 – Present",
      title: "Community Event Organizer",
      company: "Ethereum Communities",
      location: "Global",
      description:
        "Hosted meetups, hackathons, and workshops to onboard developers into Web3. Organized Road to Devcon events, Devcon Satellite sessions, and led the 10 Years of Ethereum Celebration in my community."
    },
    {
      year: "Sep 2023 – Jan 2024",
      title: "Freelance Blockchain Developer",
      company: "Infognana (IG) Solutions",
      location: "Remote",
      description:
        "Delivered blockchain solutions with focus on smart contracts, token standards, and full-stack dApp development. Supported early-stage Web3 product rollouts."
    },
    {
      year: "Aug 2021 – May 2024",
      title: "Blockchain Developer",
      company: "Infosys Ltd",
      location: "Bangalore, India (Hybrid)",
      description:
        "Worked on blockchain R&D projects involving asset tokenization, DAO design, and upgradable smart contracts. Delivered multiple ERC20/721 implementations and built decentralized project management tools."
    }
  ];
  
  
  return (
    <section id="experience" className="py-20 px-6 relative">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={false}
        targetSelector=".cursor-target"
        sectionId="experience"
      />
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-20">
        <h2 className="cursor-target text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
          Experience & Community
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className="relative flex flex-col md:flex-row md:items-start gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[var(--shadow-glow-primary)]" />
                
                {/* Year badge */}
                <div className="md:ml-20 flex-shrink-0">
                  <span className="cursor-target inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.year}
                  </span>
                </div>
                
                {/* Content */}
                <div className="card-glass flex-1 md:ml-4 relative">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="cursor-target text-xl font-semibold text-foreground">
                      {experience.title}
                    </h3>
                    <span className="cursor-target flex items-center text-muted-foreground text-sm flex-shrink-0 ml-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="cursor-target text-primary font-medium">
                      {experience.company}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;