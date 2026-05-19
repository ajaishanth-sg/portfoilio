import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ajaishanth-sg',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ajaishanth',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://x.com/ajaishanth?s=09',
      label: 'Twitter'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/ajaishanth',
      label: 'Instagram'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Ajaishanth</h3>
            <p className="text-muted-foreground max-w-md">
              Full Stack Developer passionate about creating innovative solutions 
              and solving real-world problems through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Contact'].map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors animated-underline"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Marthandam, Kanyakumari</p>
              <p>ajaishanth22@gmail.com</p>
              <p>Available for freelance work</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-xl glow-hover group"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-card-border/20 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            &copy; {currentYear} Ajaishanth S G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};