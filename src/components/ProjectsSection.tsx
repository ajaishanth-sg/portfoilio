import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Maxmoffy',
      description: 'A modern web application built with cutting-edge technologies for enhanced user experience.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/ajaishanth-sg/maxmoffy',
      liveUrl: '#',
      lastUpdated: 'Aug 17, 2025',
      category: 'Web Application'
    },
    {
      title: 'Blood Bank Management System',
      description: 'Comprehensive management system for blood banks with donor tracking and inventory management.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
      githubUrl: 'https://github.com/ajaishanth-sg/Blood-Bank-Management-',
      liveUrl: '#',
      lastUpdated: 'Aug 3, 2025',
      category: 'Healthcare'
    },
    {
      title: 'Mehendi Geni',
      description: 'AI-powered application for mehendi design generation and customization.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      githubUrl: 'https://github.com/ajaishanth-sg/mehendi_geni',
      liveUrl: '#',
      lastUpdated: 'May 25, 2025',
      category: 'AI/ML'
    },
    {
      title: 'Mehendi Chatbot',
      description: 'Intelligent chatbot for mehendi-related queries and design recommendations.',
      technologies: ['Python', 'NLP', 'Flask', 'JavaScript'],
      githubUrl: 'https://github.com/ajaishanth-sg/mehendi-chatbot',
      liveUrl: '#',
      lastUpdated: 'Apr 29, 2025',
      category: 'AI/ML'
    },
    {
      title: 'Data Science Projects',
      description: 'Collection of data science experiments and analysis projects using Jupyter notebooks.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
      githubUrl: 'https://github.com/ajaishanth-sg/datascience',
      liveUrl: '#',
      lastUpdated: 'Ongoing',
      category: 'Data Science'
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern, responsive portfolio website showcasing my work and skills.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/ajaishanth-sg/Ajaishanth',
      liveUrl: '#',
      lastUpdated: 'Aug 17, 2025',
      category: 'Portfolio'
    }
  ];

  const categories = ['All', 'Web Application', 'Healthcare', 'AI/ML', 'Data Science', 'Portfolio'];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in various technologies 
            and my passion for creating innovative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 
                ? "bg-gradient-primary shadow-elegant" 
                : "glass-card border-primary/20 hover:border-primary/40"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border-card-border/20 hover-lift group relative overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.lastUpdated}
                  </div>
                </div>
                <CardTitle className="group-hover:text-gradient transition-all duration-300 text-lg">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md hover:bg-secondary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 glass-card border-primary/20 hover:border-primary/40 hover-lift group/btn"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:bg-gradient-glow hover-lift group/btn"
                      asChild
                    >
                      <a href={project.liveUrl}>
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="glass-card border-primary/20 hover:border-primary/40 glow-hover"
            asChild
          >
            <a href="https://github.com/ajaishanth-sg" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};