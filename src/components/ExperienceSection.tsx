import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      year: "2021 – Present",
      title: "Blockchain Developer",
      company: "Throughbit Technologies Pvt Ltd",
      location: "Remote",
      description: "Leading blockchain development initiatives, architecting smart contracts, and building Web3 applications with a focus on DeFi and NFT ecosystems."
    },
    {
      year: "2024",
      title: "Community Event Organizer",
      company: "Ethereum & Bitcoin Communities",
      location: "Global",
      description: "Organized community events and workshops, bringing together developers and enthusiasts to learn about blockchain technology and cryptocurrency adoption."
    },
    {
      year: "2023 – Present",
      title: "Speaker & Volunteer",
      company: "Ethereum Hackathons & Devcon",
      location: "Various Locations",
      description: "Active speaker and volunteer at Ethereum hackathons and Devcon events, sharing knowledge about smart contract security and blockchain scalability."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
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
                  <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.year}
                  </span>
                </div>
                
                {/* Content */}
                <div className="card-glass flex-1 md:ml-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {experience.title}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                    <span className="text-primary font-medium">
                      {experience.company}
                    </span>
                    <span className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
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