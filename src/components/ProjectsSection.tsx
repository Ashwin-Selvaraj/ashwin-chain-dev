import { ExternalLink, Github } from 'lucide-react';
import memeTvImage from '@/assets/meme-tv-project.jpg';
import eventOrganizerImage from '@/assets/event-organizer-project.jpg';
import pizzaDayImage from '@/assets/pizza-day-project.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "The Meme TV",
      description: "Rewards-based TV app",
      image: memeTvImage,
      githubUrl: "https://github.com/ashwin/meme-tv",
      liveUrl: "https://meme-tv.app"
    },
    {
      title: "Event Organizer dApp",
      description: "NFT ticketing",
      image: eventOrganizerImage,
      githubUrl: "https://github.com/ashwin/event-organizer",
      liveUrl: "https://event-organizer.app"
    },
    {
      title: "Bitcoin Pizza Day POAP",
      description: "NFT minting portal",
      image: pizzaDayImage,
      githubUrl: "https://github.com/ashwin/pizza-day-poap",
      liveUrl: "https://pizza-day.app"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card"
            >
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
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