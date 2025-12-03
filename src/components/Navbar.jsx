import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Diamond } from 'lucide-react';
import { PageRoute } from '../types';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: PageRoute.HOME },
    { name: 'Portfolio', path: PageRoute.PORTFOLIO },
    { name: 'About', path: PageRoute.ABOUT },
    { name: 'Contact', path: PageRoute.CONTACT },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to={PageRoute.HOME} className="flex items-center space-x-2 group">
            <Diamond className="h-6 w-6 text-gold group-hover:text-white transition-colors duration-300" />
            <span className="text-2xl font-serif font-bold tracking-widest text-white group-hover:text-gold transition-colors duration-300">LUMINA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-gold font-semibold border-b-2 border-gold pb-1'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gold focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-white/10 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium uppercase tracking-wider w-full text-center ${
                  isActive(link.path) ? 'text-gold bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
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