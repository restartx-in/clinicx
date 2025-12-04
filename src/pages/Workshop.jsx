import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '@/constants/types';
import { Check, Clock, Globe, Calendar, ArrowLeft, Wifi, MonitorPlay } from 'lucide-react';

export const Workshop = () => {
  // Updated schedule for Online context
  const schedule = [
    { time: "10:00 AM", title: "Digital Presence & Branding", desc: "Optimizing your social media algorithms and digital portfolio setup." },
    { time: "11:30 AM", title: "Virtual Casting Techniques", desc: "Mastering the 'Self-Tape'. Lighting, angles, and slate introduction at home." },
    { time: "01:00 PM", title: "Lunch Break", desc: "Offline break." },
    { time: "02:00 PM", title: "Remote Posing Workshop", desc: "Live guided posing session via webcam with real-time feedback." },
    { time: "04:00 PM", title: "Q&A with Agents", desc: "Open floor discussion with booking agents from NY and Paris." },
  ];

  return (
    <div className="w-full bg-[#1a1a1a] min-h-screen pt-24 pb-12">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to={PageRoute.PORTFOLIO} className="inline-flex items-center text-gray-500 hover:text-[#c4a484] transition-colors mb-6 text-[10px] uppercase tracking-[0.2em] font-bold">
          <ArrowLeft className="h-3 w-3 mr-2" /> Back to Programs
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
               <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
               <span className="text-[#c4a484] font-bold uppercase tracking-[0.3em] text-xs">Live Stream Event</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-thin text-white mb-8 leading-none">
              Day Online <br/><span className="italic text-[#c4a484] font-serif">Workshop</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-lg">
              Join our intensive one-day virtual masterclass. Learn industry secrets, perfect your digital casting, and connect with agents from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to={PageRoute.CONTACT}
                className="px-10 py-4 bg-[#c4a484] text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors text-center"
              >
                Register Now
              </Link>
              <div className="px-10 py-4 border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-xs text-center flex items-center justify-center space-x-2">
                <Wifi className="h-4 w-4 mr-2" />
                <span>Global Access</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] border border-white/5 p-4 bg-[#121212]">
            <div className="w-full h-full relative overflow-hidden bg-neutral-900">
               <img 
                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" 
                 alt="Online Workshop" 
                 className="w-full h-full object-cover grayscale opacity-60 hover:opacity-80 transition-opacity duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 right-8 border-l-2 border-[#c4a484] pl-4">
                 <p className="text-white font-thin text-2xl mb-1">Interactive Training</p>
                 <p className="text-gray-500 text-xs uppercase tracking-widest">Zoom & Google Meet Integration</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Bar */}
      <div className="bg-[#151515] border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center group">
            <MonitorPlay className="h-8 w-8 text-[#c4a484] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-2">Platform</h3>
            <p className="text-gray-400 font-light">Zoom Live Stream</p>
            <p className="text-gray-600 text-[10px] uppercase mt-1 tracking-wider">Link sent upon registration</p>
          </div>
          <div className="flex flex-col items-center group">
            <Calendar className="h-8 w-8 text-[#c4a484] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-2">Next Date</h3>
            <p className="text-gray-400 font-light">Saturday, Nov 18</p>
            <p className="text-gray-600 text-[10px] uppercase mt-1 tracking-wider">10:00 AM EST</p>
          </div>
          <div className="flex flex-col items-center group">
            <Globe className="h-8 w-8 text-[#c4a484] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-2">Investment</h3>
            <p className="text-gray-400 font-light">$150.00 USD</p>
            <p className="text-gray-600 text-[10px] uppercase mt-1 tracking-wider">Includes recording access</p>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-thin text-white text-center mb-16 uppercase tracking-widest">Session Schedule</h2>
        <div className="space-y-0 border-l border-white/10 ml-4 md:ml-0">
          {schedule.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-0 pb-12 last:pb-0">
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-1 md:left-auto md:right-[calc(100%+2rem)] w-2.5 h-2.5 rounded-full bg-[#c4a484] ring-4 ring-[#1a1a1a]"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-[#c4a484] font-bold text-xs uppercase tracking-widest md:w-24 md:text-right shrink-0">{item.time}</span>
                <div>
                  <h3 className="text-xl font-serif italic text-white mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};