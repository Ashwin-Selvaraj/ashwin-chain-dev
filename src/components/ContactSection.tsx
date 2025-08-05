import { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import MagicBentoElement from './MagicBentoElement';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Using Formspree (free service)
      const response = await fetch('https://formspree.io/f/xrblyypk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <MagicBentoElement 
                  particleCount={4}
                  glowColor="255, 0, 0"
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                >
                  <div 
                    className={`p-3 border rounded-md bg-background/50 ${
                      errors.name ? 'border-red-500' : 'border-border'
                    }`}
                    style={{ minHeight: '40px' }}
                  >
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-transparent border-none focus:ring-0 focus:outline-none w-full"
                    />
                  </div>
                </MagicBentoElement>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              {/* Email Input with MagicBento Effect */}
              <div className="mb-6">
                <MagicBentoElement 
                  particleCount={4}
                  glowColor="255, 0, 0"
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                >
                  <div 
                    className={`p-3 border rounded-md bg-background/50 ${
                      errors.email ? 'border-red-500' : 'border-border'
                    }`}
                    style={{ minHeight: '40px' }}
                  >
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-transparent border-none focus:ring-0 focus:outline-none w-full"
                    />
                  </div>
                </MagicBentoElement>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              {/* Message Input with MagicBento Effect */}
              <div className="mb-6">
                <MagicBentoElement 
                  particleCount={4}
                  glowColor="255, 0, 0"
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                >
                  <div 
                    className={`p-3 border rounded-md bg-background/50 ${
                      errors.message ? 'border-red-500' : 'border-border'
                    }`}
                    style={{ minHeight: '120px' }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-transparent border-none focus:ring-0 focus:outline-none w-full resize-none"
                    />
                  </div>
                </MagicBentoElement>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-hero"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
                  <MagicBentoElement
                    key={link.name}
                    particleCount={4}
                    glowColor="255, 0, 0"
                    enableTilt={true}
                    clickEffect={true}
                    enableMagnetism={true}
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
                  </MagicBentoElement>
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