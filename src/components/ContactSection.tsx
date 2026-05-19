import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ajaishanth22@gmail.com',
      href: 'mailto:ajaishanth22@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Marthandam, Kanyakumari',
      href: '#'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7448926450',
      href: 'tel:+917448926450'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out for collaborations, job opportunities, or just to say hello! 
                I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 glass-card rounded-xl glow-hover group block"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-gradient transition-colors">
                      {info.title}
                    </div>
                    <div className="text-muted-foreground text-sm">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <Card className="glass-card border-green-500/20">
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 pulse-glow"></div>
                  <CardTitle className="text-lg">Available for Work</CardTitle>
                </div>
                <CardDescription>
                  Currently open to new opportunities and freelance projects
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-card-border/20 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl">Send Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name"
                      className="glass-card border-card-border/20 focus:border-primary/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="glass-card border-card-border/20 focus:border-primary/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project discussion"
                    className="glass-card border-card-border/20 focus:border-primary/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="glass-card border-card-border/20 focus:border-primary/40"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:bg-gradient-glow shadow-elegant"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};