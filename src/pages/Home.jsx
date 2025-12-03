import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '@/constants/types';

// Mock data for featured models
const featuredModels = [
  { id: '1', name: 'Elena V', category: 'fashion', image: 'https://picsum.photos/id/338/600/800', height: '5\'10"', shoe: '8' },
  { id: '2', name: 'Marcus T', category: 'runway', image: 'https://picsum.photos/id/177/600/800', height: '6\'2"', shoe: '11' },
  { id: '3', name: 'Sarah J', category: 'commercial', image: 'https://picsum.photos/id/64/600/800', height: '5\'9"', shoe: '7.5' },
];

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://picsum.photos/id/331/1920/1080")' }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            LUMINA
          </h1>
          <p className="text-lg md:text-xl font-light tracking-widest uppercase mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150">
            Redefining Beauty & Style for the Modern Era
          </p>
          <Link 
            to={PageRoute.CONTACT}
            className="group relative px-8 py-4 bg-transparent border border-white overflow-hidden animate-in fade-in zoom-in duration-1000 delay-300"
          >
            <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center space-x-2 text-white group-hover:text-black transition-colors duration-300">
              <span className="uppercase tracking-widest text-sm font-bold">Book a Model</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-black">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Lumina is more than an agency; we are curators of talent. 
            We scout, develop, and manage a diverse spectrum of models who grace the covers of magazines, 
            walk the most prestigious runways, and bring commercial campaigns to life.
          </p>
          <div className="h-px w-24 bg-black mx-auto"></div>
        </div>
      </section>

      {/* Sample Portfolio */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif">Featured Talent</h2>
            <Link to={PageRoute.PORTFOLIO} className="text-sm uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredModels.map((model) => (
              <Link 
                key={model.id}
                to={PageRoute.PORTFOLIO}
                className="group relative overflow-hidden aspect-[3/4]"
              >
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif">{model.name}</h3>
                  <p className="text-xs uppercase tracking-wider">{model.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};