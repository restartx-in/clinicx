import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '@/constants/types';
import { Star, ArrowRight, Calendar, Users, Camera, Diamond } from 'lucide-react';

export const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "6-Day Intensive Model Bootcamp",
      description: "Our flagship comprehensive training program designed to transform beginners into industry-ready professionals. Covers walk, pose, branding, and casting.",
      icon: <Star className="h-8 w-8 text-gold" />,
      link: PageRoute.WORKSHOP,
      highlight: true
    },
    {
      id: 2,
      title: "Runway Mastery",
      description: "Advanced walking techniques, turns, and posture correction for high-fashion runway work. Strictly for models 5'9\"+ (female) and 6'0\"+ (male).",
      icon: <Users className="h-8 w-8 text-white" />,
      link: PageRoute.CONTACT,
      highlight: false
    },
    {
      id: 3,
      title: "Editorial Posing & Angles",
      description: "Learn how to work the camera. A full day dedicated to facial expressions, body angles, and dynamic movement for print photography.",
      icon: <Camera className="h-8 w-8 text-white" />,
      link: PageRoute.CONTACT,
      highlight: false
    },
  ];

  return (
    <div className="w-full bg-neutral-950 pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: 'url("https://www.ppa.com/assets/images/ppmag_articles/header-72020jaimayhew9.jpg")' }}
        >
          <div className="absolute "></div>
        </div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Lumina <span className="text-gold">Academy</span></h1>
          <p className="text-lg text-gray-300 font-light tracking-wide">
            Elite training programs curated by industry veterans to launch your modeling career.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className={`relative flex flex-col p-8 rounded-sm border transition-all duration-300 ${
                program.highlight 
                  ? 'bg-neutral-900 border-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]' 
                  : 'bg-black border-white/10 hover:border-white/30'
              }`}
            >
              <div className="mb-6">{program.icon}</div>
              <h3 className="text-2xl font-serif text-white mb-4">{program.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed text-sm">
                {program.description}
              </p>
              
              <Link 
                to={program.link}
                className={`group flex items-center space-x-2 text-sm uppercase tracking-widest font-bold mt-auto ${
                  program.highlight ? 'text-gold' : 'text-white'
                }`}
              >
                <span>{program.link === PageRoute.WORKSHOP ? 'View Curriculum' : 'Apply for Waitlist'}</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 p-12 bg-neutral-900 border border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Diamond className="h-64 w-64 text-gold" />
          </div>
          <h2 className="text-3xl font-serif text-white mb-6 relative z-10">Not sure where to start?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
            Book a 15-minute consultation with our development team to assess your potential and find the right path for you.
          </p>
          <Link 
            to={PageRoute.CONTACT}
            className="relative z-10 inline-block px-10 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold"
          >
            Contact Admissions
          </Link>
        </div>
      </div>
    </div>
  );
};