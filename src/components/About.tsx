import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const About = () => {
  const skills = [
    'Java', 'Spring Boot', 'Node.js', 'JavaScript', 'N8N', 'TypeScript', 'React',
    'API Testing', 'MySQL', 'Tailwind CSS', 'MongoDB', 'SQL', 'Git / GitHub',
    'OpenAI', 'Angular', 'Python', 'Next.js', 'Cloud Computing', 'Test Automation', 'HTML'
  ];

  const education = [
    {
      title: 'BSc (Hons) Computer Science',
      institution: 'University of Westminster (Informatics Institute of Technology)',
      period: 'Expected Graduation: 2027'
    },
    {
      title: 'Foundation Certificate in Higher Education',
      institution: 'Informatics Institute of Technology',
      period: 'Graduated: 2023'
    }
  ];

  return (
    <section id="about" className="section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About <span className="text-gradient">Me</span>
      </motion.h2>

      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="about-heading">
            Professional Summary
          </h3>
          <p className="about-desc">
            Dedicated Computer Science undergraduate with a strong focus on Full-Stack Development and AI Integration. Experience building large-scale web applications, including government digital platforms and AI-powered career tools.
          </p>
          <p className="about-desc-lg">
            Proficient in modern frameworks like React, Next.js, and Spring Boot, with a passion for delivering innovative, user-centric solutions.
          </p>

          <div className="about-competencies">
            <h3 className="about-heading competencies-title">Core Competencies</h3>
            <ul className="timeline-list">
              <li>Strong understanding of Data Structures and Algorithms</li>
              <li>Knowledge of Object-Oriented Programming and Agile methodologies</li>
              <li>Proficient with development tools including VS Code, IntelliJ, and Postman</li>
              <li>Strong communication and teamwork skills</li>
            </ul>
          </div>

          <div className="about-education">
            <h3 className="about-heading about-icon-heading">
              <GraduationCap size={24} className="text-gradient" /> Education
            </h3>
            <div className="about-timeline">
              {education.map((item, index) => (
                <div key={index} className="timeline-item education-item glass">
                  <div className="timeline-date text-gradient">{item.period}</div>
                  <h4 className="timeline-title education-title">{item.title}</h4>
                  <div className="timeline-company">{item.institution}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass tech-stack-card p-0"
        >
          <h3 className="tech-stack-title">My Tech Stack</h3>
          <p className="tech-stack-desc">Technologies I work with to bring ideas to life.</p>

          <div className="skill-tags">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
