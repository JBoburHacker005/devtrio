import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';
import Telegram from './icons/Telegram';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <img
              src="https://ibb.co/7xgQM8hW"
              alt="DevTrio logo"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <span className="font-display font-semibold text-xl gradient-text">DevTrio</span>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#developers" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {[Github, Linkedin, Telegram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © 2024 DevTrio. Crafted with <Heart className="w-4 h-4 text-destructive" /> using cutting-edge tech.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
