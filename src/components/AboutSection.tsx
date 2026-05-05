import { Code2, Database, Globe, Smartphone } from 'lucide-react';

export const AboutSection = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern frameworks',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs',
      technologies: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL']
    },
    {
      icon: Globe,
      title: 'Full Stack Solutions',
      description: 'End-to-end application development from concept to deployment',
      technologies: ['REST APIs', 'GraphQL', 'Docker', 'AWS']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with modern tools',
      technologies: ['React Native', 'Flutter', 'Expo', 'Firebase']
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl float-delay"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Ajaishanth S G, a passionate self-taught programmer from Marthandam, Nagarcoil. 
            I love creating innovative solutions and turning ideas into reality through code. 
            My journey in tech is driven by curiosity and the desire to solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl hover-lift group relative overflow-hidden"
            >
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 relative">
                    <skill.icon className="h-6 w-6 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{skill.description}</p>
                </div>
                
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs mr-2 mb-1 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 relative">
          <div className="glass-card p-8 rounded-3xl border border-primary/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '20+', label: 'Projects Completed', color: 'text-primary' },
                { number: '2+', label: 'Years Experience', color: 'text-secondary' },
                { number: '10+', label: 'Technologies', color: 'text-tertiary' },
                { number: '100%', label: 'Client Satisfaction', color: 'text-primary-glow' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group cursor-default"
                >
                  <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};