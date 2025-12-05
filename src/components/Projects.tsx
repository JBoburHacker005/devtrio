import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, X, Layers, Code, Palette, Database } from 'lucide-react';

const categories = ['All', 'Web App', 'Mobile', 'AI/ML', 'E-commerce'];

const projects = [
  {
    id: 1,
    title: 'NeoBank Dashboard',
    description: 'A comprehensive fintech dashboard with real-time analytics, transaction management, and AI-powered insights.',
    longDescription: 'NeoBank Dashboard revolutionizes financial management with its intuitive interface and powerful features. Built with React and TypeScript, it offers real-time transaction tracking, predictive analytics, and seamless integration with multiple banking APIs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    category: 'Web App',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    developer: 'Alex Chen',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-primary to-cyan-400',
  },
  {
    id: 2,
    title: 'Artisan Marketplace',
    description: 'Premium e-commerce platform for handcrafted goods with AR preview capabilities.',
    longDescription: 'Artisan Marketplace connects creators with conscious consumers through an immersive shopping experience. Features include 3D product previews, AR try-on functionality, and a sophisticated recommendation engine.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    category: 'E-commerce',
    tech: ['Next.js', 'Three.js', 'Stripe', 'MongoDB'],
    developer: 'Sarah Martinez',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-secondary to-pink-500',
  },
  {
    id: 3,
    title: 'HealthSync Mobile',
    description: 'Cross-platform health tracking app with AI-driven wellness recommendations.',
    longDescription: 'HealthSync Mobile empowers users to take control of their wellness journey. The app integrates with wearables, provides personalized nutrition plans, and uses machine learning to predict health trends.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    category: 'Mobile',
    tech: ['React Native', 'Python', 'TensorFlow', 'Firebase'],
    developer: 'Marcus Johnson',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: 4,
    title: 'CodeMentor AI',
    description: 'AI-powered coding assistant with real-time pair programming capabilities.',
    longDescription: 'CodeMentor AI transforms the learning experience for developers. Using advanced language models, it provides contextual code suggestions, explains complex concepts, and offers real-time debugging assistance.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
    category: 'AI/ML',
    tech: ['Python', 'GPT-4', 'FastAPI', 'Redis'],
    developer: 'Alex Chen',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-amber-500 to-orange-400',
  },
  {
    id: 5,
    title: 'EventFlow',
    description: 'Modern event management platform with virtual venue capabilities.',
    longDescription: 'EventFlow reimagines event planning with its comprehensive toolkit. From virtual conferences to hybrid experiences, it offers seamless attendee management, real-time engagement tools, and detailed analytics.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    category: 'Web App',
    tech: ['Vue.js', 'WebRTC', 'Node.js', 'AWS'],
    developer: 'Sarah Martinez',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-violet-500 to-purple-400',
  },
  {
    id: 6,
    title: 'DataViz Pro',
    description: 'Enterprise data visualization suite with interactive dashboards.',
    longDescription: 'DataViz Pro transforms complex data into actionable insights. With drag-and-drop dashboard creation, advanced charting libraries, and real-time data streaming, it empowers businesses to make data-driven decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    category: 'Web App',
    tech: ['React', 'D3.js', 'GraphQL', 'TimescaleDB'],
    developer: 'Marcus Johnson',
    liveUrl: '#',
    githubUrl: '#',
    color: 'from-rose-500 to-red-400',
  },
];

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  tech: string[];
  developer: string;
  liveUrl: string;
  githubUrl: string;
  color: string;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
      
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`} />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-primary-foreground mb-3`}>
                {project.category}
              </span>
              <h3 className="font-display text-3xl font-bold text-foreground">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Developer */}
          <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-muted/30">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Lead Developer</p>
              <p className="font-medium text-foreground">{project.developer}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <motion.a
              href={project.liveUrl}
              className="flex-1 btn-primary-glow text-center py-3 text-primary-foreground flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              className="flex-1 btn-glass text-center py-3 text-foreground flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              View Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions spanning various industries and technologies.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-chip ${activeCategory === category ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className="glass-card overflow-hidden cursor-pointer group"
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-primary-foreground`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
