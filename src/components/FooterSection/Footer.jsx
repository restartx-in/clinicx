import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "./footer.scss";

// Updated to accept the new prop
export const Footer = ({ hideBrandColumn }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column - CONDITIONAL RENDERING APPLIED HERE */}
          {/* <div /> */}

          {/* Contact Column */}
          <div className="contact-column">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li>
                <MapPin className="icon" />
                <span>Chicago / Global</span>
              </li>
              {/* <li>
                <Phone className="icon" />
                <span>+1 (212) 555-0199</span>
              </li> */}
              <li>
                <Mail className="icon" />
                <span>royalrunwayfashion@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="social-column">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a
                href="https://www.instagram.com/royalrunwayfashionweek?igsh=dDF3YW9ndm1zeDZk&utm_source=qr"
                aria-label="Instagram"
              >
                <Instagram className="icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="icon" />
              </a>
              <a
                href="https://www.facebook.com/share/1e7sHHCUZt/?mibextid=wwXIfr"
                aria-label="Facebook"
              >
                <Facebook className="icon" />
              </a>
            </div>
            <div className="copyright">
              <p>© 2024 Royal Runway Fashion.</p>
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
