
import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'; // Removed Crown
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="brand-column">
            {/* Updated Logo Section */}
            <div className="brand-logo">
                <img 
                  src="src/assets/new.png" 
                  alt="Royal Runway Logo" 
                  className="footer-logo-img"
                />
                <span className="brand-text">ROYAL RUNWAY</span>
            </div>
            
            <p className="brand-desc">
              Empowering aspiring queens to build confidence, presence, and a legacy of their own.
            </p>
          </div>
          
          {/* Contact Column */}
          <div className="contact-column">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li>
                <MapPin className="icon" />
                <span>New York / Global</span>
              </li>
              {/* <li>
                <Phone className="icon" />
                <span>+1 (212) 555-0199</span>
              </li> */}
              <li>
                <Mail className="icon" />
                <span>bookings@royalrunway.com</span>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="social-column">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <Instagram className="icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="icon" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook className="icon" />
              </a>
            </div>
            <div className="copyright">
              <p>© 2024 Royal Runway.</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>Designed with Elegance</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;