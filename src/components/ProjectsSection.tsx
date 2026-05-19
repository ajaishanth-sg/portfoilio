import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Pharma AI (MetricsNumero)',
      description: 'AI-powered pharmaceutical applications focused on quality assurance, compliance, and document intelligence workflows. Features OCR for batch record compliance.',
      technologies: ['Python', 'Flask', 'React', 'NLP', 'Computer Vision'],
      githubUrl: 'https://github.com/ajaishanth-sg',
      liveUrl: '#',
      lastUpdated: 'Recent',
      category: 'AI/ML'
    },
    {
      title: 'GenCanvas — AI Diagram Studio',
      description: 'AI-powered Enterprise Architecture diagramming tool generating multi-tiered architecture diagrams from prompts and documents with export support.',
      technologies: ['React', 'FastAPI', 'Tailwind CSS', 'Zustand'],
      githubUrl: 'https://github.com/ajaishanth-sg',
      liveUrl: '#',
      lastUpdated: 'Recent',
      category: 'Web Application'
    },
    {
      title: 'Kogniv — Knowledge Platform',
      description: 'Enterprise AI platform integrating ServiceNow, Salesforce, and Gmail for unified knowledge retrieval and RAG-based search workflows.',
      technologies: ['Python', 'LLMs', 'RAG', 'Vector DB', 'Docker'],
      githubUrl: 'https://github.com/ajaishanth-sg',
      liveUrl: '#',
      lastUpdated: 'Recent',
      category: 'Enterprise AI'
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Application', 'Enterprise AI'];

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