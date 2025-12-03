import React from 'react';
import { Camera, Users, Award, Briefcase } from 'lucide-react';

export const About = () => {
  return (
    <div className="w-full bg-white pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("https://picsum.photos/id/250/1920/1080")' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white text-center">
            About Lumina
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif mb-4">A Legacy of Excellence</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2024, Lumina Management has quickly risen to become a premier boutique agency. 
              We believe in quality over quantity, managing a select board of talent that we truly believe in.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our approach is personal. We develop our models holistically, focusing not just on their look, 
              but on their career longevity, personal brand, and physical well-being.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-2xl mb-1">50+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Top Models</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-1">200+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Campaigns</p>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <img 
              src="https://picsum.photos/id/325/600/800" 
              alt="Backstage" 
              className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gray-100 -z-10"></div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 border-t border-gray-100">
          <div className="text-center p-6 hover:bg-gray-50 transition-colors duration-300">
            <Camera className="h-10 w-10 mx-auto mb-4 text-gray-800" />
            <h3 className="text-lg font-serif font-bold mb-2">Editorial</h3>
            <p className="text-sm text-gray-500">Securing covers on Vogue, Elle, and Harper's Bazaar.</p>
          </div>
          <div className="text-center p-6 hover:bg-gray-50 transition-colors duration-300">
            <Users className="h-10 w-10 mx-auto mb-4 text-gray-800" />
            <h3 className="text-lg font-serif font-bold mb-2">Development</h3>
            <p className="text-sm text-gray-500">Comprehensive training for new faces.</p>
          </div>
          <div className="text-center p-6 hover:bg-gray-50 transition-colors duration-300">
            <Briefcase className="h-10 w-10 mx-auto mb-4 text-gray-800" />
            <h3 className="text-lg font-serif font-bold mb-2">Management</h3>
            <p className="text-sm text-gray-500">Strategic career planning and contract negotiation.</p>
          </div>
          <div className="text-center p-6 hover:bg-gray-50 transition-colors duration-300">
            <Award className="h-10 w-10 mx-auto mb-4 text-gray-800" />
            <h3 className="text-lg font-serif font-bold mb-2">Reputation</h3>
            <p className="text-sm text-gray-500">Recognized globally for integrity and style.</p>
          </div>
        </div>
      </div>
    </div>
  );
};