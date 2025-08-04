import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GlareHover from './GlareHover';
import Cubes from './Cubes';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const ProjectsSection = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px'
  });

  const companyProjects = [
    {
      title: "TheMemeTV",
      description: "A streak-based rewards platform that gamifies TV watching using on-chain token claims and Web3 incentives.",
      tags: ["Web3", "Ethereum", "Rewards", "Streak System"],
      github: "#",
      live: "https://www.thememe.tv/"
    },
    {
      title: "Square NFT",
      description: "NFT minting and management system designed for creators and collectors.",
      tags: ["NFT", "Smart Contracts", "IPFS"],
      github: "#",
      live: "https://www.squarenft.com/"
    },
    {
      title: "Coin Diary",
      description: "A daily journaling app integrated with blockchain data to log market sentiment and personal trading notes.",
      tags: ["Crypto", "React", "Blockchain Logs"],
      github: "#",
      live: "https://coindiary.com/"
    },
    {
      title: "TheBitcoin.com",
      description: "A Bitcoin-focused web portal with educational content and interactive features for newcomers.",
      tags: ["Bitcoin", "Web3", "Education"],
      github: "#",
      live: "https://thebitcoin.com/"
    },
    {
      title: "Decentric.io",
      description: "A unified dApp interface for tracking wallet performance and interacting with smart contracts across chains.",
      tags: ["Multi-chain", "dApp Dashboard", "React"],
      github: "#",
      live: "https://decentric.io/"
    }
  ];

  const personalProjects = [
    {
      title: "Decentralized Lottery",
      description: "A smart contract-based lottery system with provable fairness and no central authority.",
      tags: ["Solidity", "Randomness", "Smart Contracts"],
      github: "https://github.com/Ashwin-Selvaraj/Decentralized-Lottery.git",
      live: "https://decentralized-lottery-six.vercel.app/"
    },
    {
      title: "Token Faucet",
      description: "A simple dApp to distribute test tokens on a custom network.",
      tags: ["Web3", "Faucet", "Ethereum"],
      github: "https://github.com/Ashwin-Selvaraj/Token-Faucet-Dapp.git",
      live: "https://token-faucet-dapp.vercel.app/"
    },
    {
      title: "NFT Mint",
      description: "An NFT minting portal allowing users to upload metadata and mint directly from the frontend.",
      tags: ["NFT", "React", "IPFS", "Ethereum"],
      github: "https://github.com/Ashwin-Selvaraj/NFT-FULL-MINT-WEBSITE.git",
      live: "https://nft-full-mint-website.vercel.app/"
    }
  ];

  const ProjectCard = ({ project, index, showGitHub = false }: { project: typeof companyProjects[0], index: number, showGitHub?: boolean }) => (
    <GlareHover
      width="100%"
      height="auto"
      background="hsl(var(--card))"
      borderRadius="12px"
      borderColor="hsl(var(--border))"
      glareColor="#ffffff"
      glareOpacity={0.2}
      glareAngle={-30}
      glareSize={200}
      transitionDuration={600}
      playOnce={false}
      className="animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6 space-y-4 w-full">
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
          {showGitHub && (
            <Button 
              variant="outline" 
              size="sm"
              className="flex-1"
              onClick={() => {
                console.log("GitHub clicked for:", project.title);
                window.open(project.github, '_blank', 'noopener,noreferrer');
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          )}
          
          <Button 
            size="sm"
            className={showGitHub ? "flex-1 btn-hero" : "w-full btn-hero"}
            onClick={() => {
              console.log("Button clicked for:", project.title);
              window.open(project.live, '_blank', 'noopener,noreferrer');
            }}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        </div>
      </div>
    </GlareHover>
  );

  return (
    <section 
      ref={elementRef}
      id="projects" 
      className={`py-20 px-6 bg-muted/30 relative overflow-hidden transition-opacity duration-500 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
      
      {/* Background Cubes */}
      <div className="absolute inset-0 opacity-30 z-0">
        <Cubes 
          gridSize={12}
          maxAngle={180}
          radius={5}
          borderStyle="2px solid #5227FF"
          faceColor="#1a1a2e"
          rippleColor="#22c55e"
          rippleSpeed={2.5}
          autoAnimate={true}
          rippleOnClick={true}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-30 pointer-events-none">
        <div className="pointer-events-auto">
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
              <ProjectCard key={project.title} project={project} index={index} showGitHub={false} />
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
              <ProjectCard key={project.title} project={project} index={index} showGitHub={true} />
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;