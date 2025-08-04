import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const companyProjects = [
    {
      title: "TheMemeTV",
      description: "A streak-based rewards platform that gamifies TV watching using on-chain token claims and Web3 incentives.",
      tags: ["Web3", "Ethereum", "Rewards", "Streak System"],
      github: "#",
      live: "#"
    },
    {
      title: "Square NFT",
      description: "NFT minting and management system designed for creators and collectors.",
      tags: ["NFT", "Smart Contracts", "IPFS"],
      github: "#",
      live: "#"
    },
    {
      title: "Coin Diary",
      description: "A daily journaling app integrated with blockchain data to log market sentiment and personal trading notes.",
      tags: ["Crypto", "React", "Blockchain Logs"],
      github: "#",
      live: "#"
    },
    {
      title: "TheBitcoin.com",
      description: "A Bitcoin-focused web portal with educational content and interactive features for newcomers.",
      tags: ["Bitcoin", "Web3", "Education"],
      github: "#",
      live: "#"
    },
    {
      title: "Decentric.io",
      description: "A unified dApp interface for tracking wallet performance and interacting with smart contracts across chains.",
      tags: ["Multi-chain", "dApp Dashboard", "React"],
      github: "#",
      live: "#"
    }
  ];

  const personalProjects = [
    {
      title: "Decentralized Lottery",
      description: "A smart contract-based lottery system with provable fairness and no central authority.",
      tags: ["Solidity", "Randomness", "Smart Contracts"],
      github: "#",
      live: "#"
    },
    {
      title: "Token Faucet",
      description: "A simple dApp to distribute test tokens on a custom network.",
      tags: ["Web3", "Faucet", "Ethereum"],
      github: "#",
      live: "#"
    },
    {
      title: "NFT Mint",
      description: "An NFT minting portal allowing users to upload metadata and mint directly from the frontend.",
      tags: ["NFT", "React", "IPFS", "Ethereum"],
      github: "#",
      live: "#"
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof companyProjects[0], index: number }) => (
    <div 
      className="card-project animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          
          <Button 
            size="sm"
            className="flex-1 btn-hero"
            asChild
          >
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
          Projects
        </h2>
        
        {/* Company Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center">
            <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
            Company Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
        
        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center">
            <span className="w-3 h-3 bg-secondary rounded-full mr-3"></span>
            Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;