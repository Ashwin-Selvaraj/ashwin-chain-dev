import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import memeTvImage from '@/assets/meme-tv-project.jpg';
import eventOrganizerImage from '@/assets/event-organizer-project.jpg';
import pizzaDayImage from '@/assets/pizza-day-project.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "The Meme TV",
      description: "A streak and rewards-based TV application with onchain claims. Built with React, Solana, and modern Web3 infrastructure.",
      image: memeTvImage,
      github: "https://github.com/ashwin/meme-tv",
      live: "https://memetv.example.com",
      tags: ["Solana", "React", "Web3", "Rewards"]
    },
    {
      title: "Event Organizer dApp",
      description: "Decentralized event ticketing with NFT-based access. Ethereum-powered platform for seamless event management.",
      image: eventOrganizerImage,
      github: "https://github.com/ashwin/event-organizer",
      live: "https://events.example.com",
      tags: ["Ethereum", "NFTs", "Smart Contracts", "Events"]
    },
    {
      title: "Bitcoin Pizza Day POAP",
      description: "Community event and NFT minting portal celebrating Bitcoin Pizza Day with collectible POAPs.",
      image: pizzaDayImage,
      github: "https://github.com/ashwin/pizza-day-poap",
      live: "https://pizzaday.example.com",
      tags: ["Bitcoin", "POAPs", "Community", "NFTs"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="card-project animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="flex-1 btn-hero"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;