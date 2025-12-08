
import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, Crown } from 'lucide-react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="brand-column">
            <h3 className="brand-logo" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Crown size={20} /> ROYAL RUNWAY
            </h3>
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