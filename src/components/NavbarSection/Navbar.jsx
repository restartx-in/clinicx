
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PageRoute } from '@/constants/types';
import './Navbar.scss';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Events & Production', path: PageRoute.EVENTSPRODUCTION },
    { name: 'Fashion Show Details', path: PageRoute.FASHION_SHOW },
    { name: '6-Day Workshop', path: PageRoute.WORKSHOP },
    { name: 'Program', path: PageRoute.PROGRAM },
    { name: 'Contact / Register', path: PageRoute.CONTACT },
  ];

  const isActive = (path) => {
    if (path === PageRoute.HOME) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-wrapper">
          {/* Logo Section */}
          <Link to={PageRoute.HOME} className="nav-logo">
            {/* Replace 'royal-logo.png' with the actual path to your saved image */}
            <img 
              src="src\assets\new.png" 
              alt="Royal Runway Logo" 
              className="logo-image"
            />
            <div className="logo-text-col">
              <span className="logo-text">ROYAL RUNWAY</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${
                  isActive(link.path) ? 'active' : 'inactive'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-toggle-btn-wrapper">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu-dropdown">
          <div className="mobile-menu-items">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link ${
                  isActive(link.path) ? 'active' : 'inactive'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;