import { Code, Phone, Mail, Link, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer container">
      <div className="glass footer-cta">
        <h2 className="footer-cta-title">Let's build something <span className="text-gradient">amazing</span> together.</h2>
        <p className="footer-cta-desc">
          Currently available for freelance opportunities and full-time roles. If you have a project that needs some creative magic, I'd love to hear about it.
        </p>
        <a href="mailto:dilsandisehansa@gmail.com" className="btn btn-primary btn-lg">
          Say Hello <Mail size={20} />
        </a>
      </div>

      <div className="footer-content">
        <div className="logo">
          <span className="text-gradient">SEHANSA</span> DILSADI.
        </div>

        <div className="footer-contact-list">
          <div className="footer-contact-item">
            <MapPin size={18} className="text-gradient" />
            <span>Dehiwala</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={18} className="text-gradient" />
            <a href="tel:0783652253">0783652253</a>
          </div>
          <div className="footer-contact-item">
            <Mail size={18} className="text-gradient" />
            <a href="mailto:dilsandisehansa@gmail.com">dilsandisehansa@gmail.com</a>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/sehansadilsadi/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Link size={20} /></a>
          <a href="#" className="social-link" aria-label="GitHub"><Code size={20} /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sehansa Dilsadi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
