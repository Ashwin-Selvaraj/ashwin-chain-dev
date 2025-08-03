const SkillsSection = () => {
  const skills = [
    'Ethereum', 'Solana', 'Smart Contracts', 'React', 'Next.js', 'Layer 2', 'Web3'
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
          Skills
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="skill-badge"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;