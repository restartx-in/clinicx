import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-section">
            <h3 className="footer-logo">LUMINA</h3>
            <p className="footer-description">
              Representing the world's most distinct faces. We bridge the gap between commercial viability and high-fashion editorial.
            </p>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list">
              <li className="footer-list-item">
                <MapPin className="footer-icon" />
                <span>152 Mercer St, New York, NY</span>
              </li>
              <li className="footer-list-item">
                <Phone className="footer-icon" />
                <span>+1 (212) 555-0199</span>
              </li>
              <li className="footer-list-item">
                <Mail className="footer-icon" />
                <span>bookings@lumina.agency</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social">
              <a href="#"><Instagram className="footer-social-icon" /></a>
              <a href="#"><Twitter className="footer-social-icon" /></a>
              <a href="#"><Facebook className="footer-social-icon" /></a>
            </div>
            <p className="footer-copy">© 2024 Lumina Mgmt.</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">DESIGNED WITH ELEGANCE</p>
        </div>
      </div>
    </footer>
  );
};
