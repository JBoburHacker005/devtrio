import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const developers = [
  {
    name: 'Alex Chen',
    role: 'Full-Stack Architect',
    bio: 'Passionate about building scalable systems and elegant APIs. 8+ years crafting digital solutions.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    socials: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
    accentColor: 'from-primary to-cyan-400',
  },
  {
    name: 'Sarah Martinez',
    role: 'UI/UX Engineer',
    bio: 'Blending creativity with code to create stunning user experiences. Design systems enthusiast.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    skills: ['Figma', 'React', 'Tailwind', 'Framer Motion'],
    socials: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
    accentColor: 'from-secondary to-pink-500',
  },
  {
    name: 'Marcus Johnson',
    role: 'Backend Specialist',
    bio: 'Database whisperer and API craftsman. Building robust infrastructure for tomorrow\'s apps.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    skills: ['Python', 'Go', 'PostgreSQL', 'Docker'],
    socials: {
      github: '#',
      linkedin: '#',
      twitter: '#',
    },
    accentColor: 'from-emerald-500 to-teal-400',
  },
];

export default function Developers() {
  return (
    <section id="developers" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Meet the Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three minds, one vision. We combine our unique expertise to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="glass-card p-8 h-full flex flex-col items-center text-center group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${dev.accentColor} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-border">
                    <img
                      src={dev.avatar}
                      alt={dev.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${dev.accentColor} flex items-center justify-center`}>
                    <span className="text-sm">✨</span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display text-2xl font-semibold mb-1 text-foreground">
                  {dev.name}
                </h3>
                <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${dev.accentColor} bg-clip-text text-transparent`}>
                  {dev.role}
                </p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {dev.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {dev.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Socials */}
                <div className="flex gap-3 mt-auto">
                  {[
                    { icon: Github, href: dev.socials.github },
                    { icon: Linkedin, href: dev.socials.linkedin },
                    { icon: Twitter, href: dev.socials.twitter },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
