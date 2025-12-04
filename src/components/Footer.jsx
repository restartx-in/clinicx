import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="brand-column">
            <h3 className="brand-logo">LUMINA</h3>
            <p className="brand-desc">
              Representing the world's most distinct faces. We bridge the gap between commercial viability and high-fashion editorial.
            </p>
          </div>
          
          {/* Contact Column */}
          <div className="contact-column">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li>
                <MapPin className="icon" />
                <span>152 Mercer St, New York, NY</span>
              </li>
              <li>
                <Phone className="icon" />
                <span>+1 (212) 555-0199</span>
              </li>
              <li>
                <Mail className="icon" />
                <span>bookings@lumina.agency</span>
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
              <p>© 2024 Lumina Mgmt.</p>
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