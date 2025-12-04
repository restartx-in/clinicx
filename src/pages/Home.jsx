import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '@/constants/types';

// Mock data for featured models
const featuredModels = [
  { id: '1', name: 'Elena V', category: 'fashion', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA==', height: '5\'10"', shoe: '8' },
  { id: '2', name: 'Marcus T', category: 'runway', image: 'https://indianpolos.com/wp-content/uploads/2024/01/man-walking-beside-the-road-scaled.jpg.webp', height: '6\'2"', shoe: '11' },
  { id: '3', name: 'Sarah J', category: 'commercial', image: 'https://indianpolos.com/wp-content/uploads/2024/01/woman-in-yellow-tracksuit-standing-on-basketball-court-side-1-scaled.jpg.webp', height: '5\'9"', shoe: '7.5' },
];

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: 'url("https://assets.teenvogue.com/photos/68bffe53e5205d12cddc2b04/16:9/w_2560%2Cc_limit/GettyImages-1208666560.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 text-gold">
            LUMINA
          </h1>
          <p className="text-lg md:text-xl font-light tracking-widest uppercase mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150 text-gray-300">
            Redefining Beauty & Style for the Modern Era
          </p>
          <Link 
            to={PageRoute.CONTACT}
            className="group relative px-10 py-4 bg-transparent border border-gold overflow-hidden animate-in fade-in zoom-in duration-1000 delay-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center space-x-2 text-gold group-hover:text-black transition-colors duration-300">
              <span className="uppercase tracking-widest text-sm font-bold">Book a Model</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white">Who We Are</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Lumina is more than an agency; we are curators of talent. 
            We scout, develop, and manage a diverse spectrum of models who grace the covers of magazines, 
            walk the most prestigious runways, and bring commercial campaigns to life.
          </p>
          <div className="h-px w-24 bg-gold mx-auto"></div>
        </div>
      </section>

      {/* Sample Portfolio */}
      <section className="py-24 bg-neutral-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif text-white">Featured Talent</h2>
            <Link to={PageRoute.PORTFOLIO} className="text-sm uppercase tracking-widest font-bold text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors">
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter  group-hover:grayscale-0 group-hover:sepia-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif text-gold">{model.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-gray-300">{model.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};