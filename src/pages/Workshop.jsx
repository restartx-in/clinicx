import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '@/constants/types';
import { Check, Clock, MapPin, Calendar, ArrowLeft } from 'lucide-react';

export const Workshop = () => {
  const schedule = [
    { day: "Day 1", title: "Foundations & The Walk", desc: "Posture analysis, core stability, and the fundamentals of the signature Lumina walk." },
    { day: "Day 2", title: "Editorial & Commercial Posing", desc: "Understanding light, angles, and facial expressions. Practice with live feedback." },
    { day: "Day 3", title: "Health, Nutrition & Fitness", desc: "Holistic wellness workshop with industry nutritionists and trainers. Measurements and maintenance." },
    { day: "Day 4", title: "Personal Branding & Socials", desc: "Building your digital portfolio. Instagram optimization and networking etiquette." },
    { day: "Day 5", title: "The Mock Casting", desc: "Simulated casting calls with real casting directors. Learn how to slate and handle cold reads." },
    { day: "Day 6", title: "Final Showcase & Comp Card", desc: "Live photoshoot for your composite card. Graduation runway show for friends and family." }
  ];

  return (
    <div className="w-full bg-neutral-950 pt-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to={PageRoute.PROGRAMS} className="inline-flex items-center text-gray-500 hover:text-gold transition-colors mb-6 text-sm uppercase tracking-wider">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Programs
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Intensive Development</span>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">The 6-Day <br/><span className="italic text-gold">Professional</span> Model Workshop</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A transformative week designed to equip you with the technical skills, industry knowledge, and confidence required to sign with top agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={PageRoute.CONTACT}
                className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors text-center"
              >
                Apply Now
              </Link>
              <div className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm text-center flex items-center justify-center space-x-2">
                <span>Next Start: Jan 10</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] border border-white/10 p-2">
            <div className="w-full h-full relative overflow-hidden">
               <div className="absolute inset-0 bg-neutral-900"></div>
               <img 
                 src="https://picsum.photos/id/338/800/1000" 
                 alt="Model Training" 
                 className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute bottom-0 left-0 bg-black/80 p-6 backdrop-blur-sm border-t border-r border-gold/50">
                 <p className="text-gold font-serif italic text-xl">"The standard for excellence."</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Bar */}
      <div className="bg-neutral-900 border-y border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Calendar className="h-8 w-8 text-gold mb-4" />
            <h3 className="text-white font-bold uppercase tracking-wider mb-2">Duration</h3>
            <p className="text-gray-400">6 Days (Mon-Sat)</p>
            <p className="text-gray-500 text-xs mt-1">10:00 AM - 4:00 PM</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="h-8 w-8 text-gold mb-4" />
            <h3 className="text-white font-bold uppercase tracking-wider mb-2">Location</h3>
            <p className="text-gray-400">Lumina Studios</p>
            <p className="text-gray-500 text-xs mt-1">SoHo, New York City</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-8 w-8 text-gold mb-4" />
            <h3 className="text-white font-bold uppercase tracking-wider mb-2">Investment</h3>
            <p className="text-gray-400">$1,450</p>
            <p className="text-gray-500 text-xs mt-1">Payment plans available</p>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-serif text-white text-center mb-16">Curriculum Overview</h2>
        <div className="space-y-6">
          {schedule.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 p-6 border border-white/5 hover:border-gold/30 bg-black transition-colors rounded-sm">
              <div className="md:w-32 flex-shrink-0">
                <span className="text-gold font-bold text-lg">{item.day}</span>
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Section */}
      <div className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-black mb-6">Ready to launch your career?</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Spaces are strictly limited to 12 participants per cohort to ensure personalized attention and feedback.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
             <div className="p-8 border border-gray-200 bg-gray-50">
                <h3 className="font-bold text-lg mb-2">Upcoming Cohort A</h3>
                <p className="text-sm text-gray-500 mb-6">Nov 12 - Nov 17, 2024</p>
                <Link to={PageRoute.CONTACT} className="block w-full py-3 bg-black text-white uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-colors">Register</Link>
             </div>
             <div className="p-8 border border-gray-200 bg-gray-50">
                <h3 className="font-bold text-lg mb-2">Upcoming Cohort B</h3>
                <p className="text-sm text-gray-500 mb-6">Dec 03 - Dec 08, 2024</p>
                <Link to={PageRoute.CONTACT} className="block w-full py-3 bg-black text-white uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-colors">Register</Link>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};