
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Diamond } from 'lucide-react';
import { PageRoute } from '@/constants/types';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Updated navigation links based on your request
  const navLinks = [
    { name: 'Program Overview', path: PageRoute.PORTFOLIO },
    { name: 'Day Online Workshop', path: PageRoute.WORKSHOP },
    { name: 'Apply / Register', path: PageRoute.CONTACT },
    { name: 'Contact', path: PageRoute.ABOUT }, // Mapped Contact to About/Info or we can keep it pointing to Footer contact info
  ];

  const isActive = (path) => {
    if (path === PageRoute.HOME) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full bg-[#1a1a1a]/95 backdrop-blur-md z-50 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to={PageRoute.HOME} className="flex items-center space-x-3 group">
            <Diamond className="h-6 w-6 text-[#c4a484] group-hover:text-white transition-colors duration-300" />
            <span className="text-xl md:text-2xl font-thin tracking-[0.2em] text-white group-hover:text-[#c4a484] transition-colors duration-300">
              LUMINA
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-[#c4a484] border-b border-[#c4a484] pb-2'
                    : 'text-gray-400 hover:text-white hover:tracking-[0.25em]'
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
              className="text-white hover:text-[#c4a484] focus:outline-none transition-transform active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-b border-white/10 absolute w-full animate-in slide-in-from-top-5">
          <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-xs font-bold uppercase tracking-[0.2em] w-full text-center border-b border-white/5 ${
                  isActive(link.path) ? 'text-[#c4a484]' : 'text-gray-400 hover:text-white'
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