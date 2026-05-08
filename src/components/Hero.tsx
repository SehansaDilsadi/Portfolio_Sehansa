import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Link, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        <div className="hero-content">
          <motion.span
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hello, It's Me <span className="text-gradient">Sehansa Dilsadi</span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I’m a Computer Science undergraduate focused on full-stack development and AI integration, building scalable web applications and user-centric digital experiences with modern technologies.
          </motion.p>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <a href="https://www.linkedin.com/in/sehansadilsadi/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LinkedIn">
              <Link size={20} />
            </a>
            <a href="mailto:dilsandisehansa@gmail.com" className="hero-social-icon" aria-label="Gmail">
              <Mail size={20} />
            </a>
            <a href="tel:0783652253" className="hero-social-icon" aria-label="Telephone">
              <Phone size={20} />
            </a>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/Sehansa Dilsadi_Resume.pdf" className="btn btn-outline glass" target="_blank" rel="noopener noreferrer" download>
              Download CV <Download size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-image-wrapper">
            <img src="/profile.png" alt="Profile" className="profile-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
