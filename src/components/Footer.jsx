import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 ">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold tracking-wider text-gold">LUMINA</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Representing the world's most distinct faces. We bridge the gap between commercial viability and high-fashion editorial.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-gold">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span>152 Mercer St, New York, NY</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-500" />
                <span>+1 (212) 555-0199</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-500" />
                <span>bookings@lumina.agency</span>
              </li>
            </ul>
          </div>

   

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-gold">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
            <div className="mt-8">
              <p className="text-xs text-gray-600">© 2024 Lumina Mgmt.</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">Designed with Elegance</p>
        </div>
      </div>
    </footer>
  );
};