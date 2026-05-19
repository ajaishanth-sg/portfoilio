import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';
import heroPortrait from '@/assets/image.png';
import { ParticleBackground } from './ParticleBackground';

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'Self-taught Programmer',
    'Innovation Creator'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, currentIndex, isDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden morphing-bg">
      <ParticleBackground />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/30 rounded-full blur-xl float animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/30 rounded-full blur-xl float-delay"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-tertiary/30 rounded-full blur-xl float-delayed-more"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-glow/20 rounded-full blur-lg float"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-secondary-glow/25 rounded-full blur-xl float-delay"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-semibold tracking-wide">WELCOME TO MY WORLD</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient animate-gradient-shift bg-[length:200%_200%] relative">
                Ajaishanth
                <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-lg rounded-lg -z-10"></div>
              </span>
            </h1>
            
            <div className="h-20 flex items-center">
              <span className="text-2xl lg:text-3xl text-muted-foreground mr-2">I'm a </span>
              <div className="relative">
                <span className="text-2xl lg:text-3xl text-primary font-semibold">
                  {displayedText}
                </span>
                <span className="text-2xl lg:text-3xl text-primary font-semibold animate-pulse">
                  |
                </span>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            IT graduate with internship experience in AI-powered applications, NLP pipelines, and LLM integrations using Python and Flask. Skilled in building scalable backend systems, REST APIs, and AI-driven automation workflows.
          </p>

          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-gradient-glow shadow-elegant hover-lift group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card border-primary/30 hover:border-primary/60 hover-lift group"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Ajaishanth_Resume.pdf';
                link.download = 'Ajaishanth_Resume.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            {[
              { Icon: Github, href: 'https://github.com/ajaishanth-sg', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/ajaishanth', label: 'LinkedIn' },
              { Icon: Twitter, href: 'https://x.com/ajaishanth?s=09', label: 'Twitter' }
            ].map(({ Icon, href, label }, index) => (
              <a 
                key={label}
                href={href} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover-lift group relative overflow-hidden"
                style={{ animationDelay: `${1.1 + index * 0.1}s` }}
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-all duration-300 relative z-10" />
                <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 rounded-xl transition-transform duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end animate-scale-in">
          <div className="relative group">
            <div className="w-80 lg:w-96 rounded-3xl overflow-hidden gradient-border p-1 hover-lift">
              <img 
                src={heroPortrait} 
                alt="Ajaishanth S G - Full Stack Developer"
                className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Floating Status Indicators */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full pulse-glow flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full pulse-glow"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-tertiary rounded-full animate-bounce"></div>
            
            {/* Skill Tags Floating Around */}
            <div className="absolute -top-8 left-1/4 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs text-primary font-medium float">
              React
            </div>
            <div className="absolute -right-12 top-1/3 px-3 py-1 bg-secondary/20 backdrop-blur-sm rounded-full text-xs text-secondary font-medium float-delay">
              Python
            </div>
            <div className="absolute -bottom-8 right-1/4 px-3 py-1 bg-tertiary/20 backdrop-blur-sm rounded-full text-xs text-tertiary font-medium float-delayed-more">
              TypeScript
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};