import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'GIC Fuel Pass Platform',
      category: 'ICTA Sri Lanka • Digital Governance',
      description: 'A centralized platform providing guidance and solutions for Fuel Pass QR issues, featuring integrated chatbot support and multilingual accessibility.',
      image: '/GIC_Fuel_Pass.png',
      link: 'https://gic.gov.lk/',
    },
    {
      id: 2,
      title: 'Dynamic Career Roadmap',
      category: 'AI-Powered Platform',
      description: 'AI-driven skill development roadmap generator integrating real-time job market data and automated recommendations.',
      image: '/Skillify.png',
      link: 'https://skillify-web.vercel.app',
    },
    {
      id: 3,
      title: 'Government Information Center (GIC)',
      category: 'Full-Stack Government Portal',
      description: 'A centralized Next.js platform modernizing citizen interaction with public services in Sri Lanka, featuring multilingual support and administrative CMS.',
      image: '/GIC_Image.png',
      link: 'https://staging.gic.gov.lk/',
    }
  ];

  return (
    <section id="projects" className="section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> Live Demo
                </a>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
