import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Work <span className="text-gradient">Experience</span>
      </motion.h2>

      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="timeline experience-timeline"
        >
          <div className="timeline-item glass">
            <div className="experience-item-header">
              <div className="experience-info">
                <div className="timeline-date text-gradient">September 2025 – Present</div>
                <h4 className="timeline-title">Project Management Intern</h4>
                <div className="timeline-company">ICTA, Sri Lanka</div>
              </div>
              <div className="experience-logo-wrapper">
                <img src="/ICTA_Image.png" alt="ICTA Logo" className="experience-logo" />
              </div>
            </div>
            <ul className="timeline-list">
              <li>Implemented the frontend for the new Government Information Center (GIC) website, delivering a responsive and multilingual user experience in Sinhala, Tamil, and English.</li>
              <li>Contributed to the AI integration component of the platform and improved the admin panel for efficient government content management.</li>
              <li>Collaborated on backend service development to ensure seamless frontend–backend integration.</li>
              <li>Conducted QA testing, applied security improvements, and optimized application performance.</li>
              <li>Supported project planning, stakeholder coordination, and maintained technical documentation aligned with national digital standards.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
