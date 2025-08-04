import { Clock, MapPin, Building, Users, Code2, Zap, Globe, Briefcase, Laptop } from 'lucide-react';
import TargetCursor from './TargetCursor';

const ExperienceSection = () => {
  const experiences = [
    {
      year: "Sep 2024 – Present",
      title: "Development Team Lead",
      company: "Throughbit Technologies Pvt Ltd",
      location: "Coimbatore, India (On-site)",
      type: "leadership",
      icon: Zap,
      description:
        "Promoted to Team Lead for driving innovation in multi-chain dApps and leading blockchain solutions. Overseeing a team building products on Ethereum, TON, Polygon, and Base. Focused on scalability, protocol integrations, and smart contract architecture.",
      tags: ["Leadership", "Multi-chain", "Binance Smart Chain", "TON", "Solana", "Base"]
    },
    {
      year: "May 2024 – Sep 2024",
      title: "Full Stack Blockchain Developer",
      company: "Throughbit Technologies Pvt Ltd",
      location: "Coimbatore, India (On-site)",
      type: "development",
      icon: Code2,
      description:
        "Worked across Base, Binance Smart Chain, Ethereum, TON, and Polygon ecosystems. Built NFT minting platforms, token utilities, and multi-chain dApp dashboards to enhance user experience and protocol interaction.",
      tags: ["NFT", "dApps", "Base", "BSC"]
    },
    {
      year: "2024 – Present",
      title: "Community Event Organizer",
      company: "Ethereum Communities",
      location: "Global",
      type: "community",
      icon: Globe,
      description:
        "Hosted meetups, hackathons, and workshops to onboard developers into Web3. Organized Road to Devcon events, Devcon Satellite sessions, and led the 10 Years of Ethereum Celebration in my community.",
      tags: ["Community", "Hackathons", "Devcon", "Events"]
    },
    {
      year: "Sep 2023 – Jan 2024",
      title: "Freelance Blockchain Developer",
      company: "Infognana (IG) Solutions",
      location: "Remote",
      type: "freelance",
      icon: Briefcase,
      description:
        "Delivered blockchain solutions with focus on smart contracts, token standards, and full-stack dApp development. Supported early-stage Web3 product rollouts.",
      tags: ["Smart Contracts", "Token Standards", "Freelance"]
    },
    {
      year: "Aug 2021 – May 2024",
      title: "Blockchain Developer",
      company: "Infosys Ltd",
      location: "Bangalore, India (Hybrid)",
      type: "corporate",
      icon: Laptop,
      description:
        "Worked on blockchain R&D projects involving asset tokenization, DAO design, and upgradable smart contracts. Delivered multiple ERC20/721 implementations and built decentralized project management tools.",
      tags: ["R&D", "Tokenization", "DAO", "ERC20", "ERC721", "Project Management"]
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
      
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center mb-20">
          <h2 className="cursor-target text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Experience & Community
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through blockchain development, leadership, and community building
          </p>
        </div>
        
        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-secondary/50 to-accent/30 rounded-full hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <div 
                  key={index}
                  className="relative group animate-fade-in hover:scale-[1.02] transition-all duration-500"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Enhanced timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-2xl items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>
                  
                  {/* Experience card */}
                  <div className="md:ml-20 relative">
                    <div className="card-glass relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 border border-border/50 hover:border-primary/30">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative p-8">
                        {/* Header with icon and year */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <span className="cursor-target inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                                <Clock className="w-4 h-4 mr-2" />
                                {experience.year}
                              </span>
                            </div>
                          </div>
                          <span className="cursor-target flex items-center text-muted-foreground text-sm bg-muted/50 px-3 py-1 rounded-full">
                            <MapPin className="w-4 h-4 mr-1" />
                            {experience.location}
                          </span>
                        </div>
                        
                        {/* Title and company */}
                        <div className="mb-4">
                          <h3 className="cursor-target text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-secondary" />
                            <span className="cursor-target text-secondary font-semibold text-lg">
                              {experience.company}
                            </span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                          {experience.description}
                        </p>
                        
                                                 {/* Tags */}
                         <div className="flex flex-wrap gap-2">
                           {experience.tags.map((tag, tagIndex) => (
                             <span 
                               key={tagIndex}
                               className="px-3 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary font-medium text-sm rounded-lg border border-primary/30 hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/30 hover:to-secondary/30 transition-all duration-200 shadow-sm"
                             >
                               {tag}
                             </span>
                           ))}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;