import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-wider">LUMINA</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Representing the world's most distinct faces. We bridge the gap between commercial viability and high-fashion editorial.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-200">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>152 Mercer St, New York, NY</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+1 (212) 555-0199</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>bookings@lumina.agency</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-200">Sitemap</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#/contact" className="hover:text-white transition-colors">Become a Model</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-200">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
            </div>
            <div className="mt-8">
              <p className="text-xs text-gray-500">© 2024 Lumina Mgmt.</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-600 uppercase tracking-widest">Designed with Elegance</p>
        </div>
      </div>
    </footer>
  );
};