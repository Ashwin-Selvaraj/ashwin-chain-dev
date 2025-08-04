import { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import MagicBento from './MagicBento';
import MagicBentoWrapper from './MagicBentoWrapper';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Ashwin-Selvaraj',
      color: 'hover:text-primary'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ashwin240899/',
      color: 'hover:text-primary'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/ashontech_',
      color: 'hover:text-primary'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ashwin240899@gmail.com',
      color: 'hover:text-secondary'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-glass">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Send me a message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input with MagicBento Effect */}
              <div className="mb-6">
                <MagicBentoWrapper 
                  particleCount={25}
                  glowColor="132, 0, 255"
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </MagicBentoWrapper>
              </div>
              
              {/* Email Input with MagicBento Effect */}
              <div className="mb-6">
                <MagicBentoWrapper 
                  particleCount={25}
                  glowColor="132, 0, 255"
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </MagicBentoWrapper>
              </div>
              
              {/* Message Input with MagicBento Effect */}
              <div className="mb-6">
                <MagicBentoWrapper 
                  particleCount={25}
                  glowColor="132, 0, 255"
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                >
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </MagicBentoWrapper>
              </div>
              
              <Button type="submit" className="w-full btn-hero">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Social Links & Info */}
          <div className="space-y-8">
            <div className="card-glass">
              <h3 className="text-xl font-semibold mb-4">Let's connect!</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about blockchain technology.
              </p>
              
              {/* Social Links with Glow Effect */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <MagicBentoWrapper
                    key={link.name}
                    particleCount={20}
                    glowColor="132, 0, 255"
                    enableTilt={false}
                    clickEffect={true}
                    enableMagnetism={false}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border transition-all duration-300 ${link.color} hover:border-current hover:scale-105`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </MagicBentoWrapper>
                ))}
              </div>
            </div>
            
            <div className="card-glass">
              <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
              <p className="text-muted-foreground">
                I typically respond to messages within 24 hours. For urgent inquiries, feel free to reach out via Twitter or LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;