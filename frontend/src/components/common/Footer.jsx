import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>EduConnect</h3>
          <p>
            Improving digital literacy and access to quality education for marginalized communities.
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/volunteer">Become a Mentor</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="mailto:contact@educonnect.org">contact@educonnect.org</a></li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} EduConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 