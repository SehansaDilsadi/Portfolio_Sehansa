import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: '2025'
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      date: '2025'
    },
    {
      title: 'Web Development Essentials',
      issuer: 'Coursera',
      date: '2024'
    },
    {
      title: 'Spring Boot 2.0 Essential Training',
      issuer: 'LinkedIn Learning',
      date: '2024'
    },
    {
      title: 'Postman Essential Training',
      issuer: 'LinkedIn Learning',
      date: '2024'
    },
    {
      title: 'Programming Foundations: Object-Oriented Design',
      issuer: 'LinkedIn Learning',
      date: '2024'
    }
  ];

  return (
    <section id="certifications" className="section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Licenses & <span className="text-gradient">Certifications</span>
      </motion.h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="cert-icon">
              <Award size={32} className="text-gradient" />
            </div>
            <div className="cert-info">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
