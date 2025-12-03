import React, { useState } from 'react';

// Extended mock data
const portfolioData = [
  { id: '1', name: 'Elena V', category: 'fashion', image: 'https://picsum.photos/id/338/600/800', height: '5\'10"', shoe: '8' },
  { id: '2', name: 'Marcus T', category: 'runway', image: 'https://picsum.photos/id/177/600/800', height: '6\'2"', shoe: '11' },
  { id: '3', name: 'Sarah J', category: 'commercial', image: 'https://picsum.photos/id/64/600/800', height: '5\'9"', shoe: '7.5' },
  { id: '4', name: 'Liam K', category: 'fitness', image: 'https://picsum.photos/id/91/600/800', height: '6\'0"', shoe: '10' },
  { id: '5', name: 'Olivia R', category: 'fashion', image: 'https://picsum.photos/id/250/600/800', height: '5\'11"', shoe: '8.5' },
  { id: '6', name: 'Noah P', category: 'commercial', image: 'https://picsum.photos/id/1005/600/800', height: '6\'1"', shoe: '10.5' },
  { id: '7', name: 'Ava L', category: 'runway', image: 'https://picsum.photos/id/129/600/800', height: '5\'9.5"', shoe: '8' },
  { id: '8', name: 'Ethan W', category: 'fitness', image: 'https://picsum.photos/id/342/600/800', height: '6\'3"', shoe: '12' },
];

export const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const filteredModels = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(m => m.category === filter);

  const categories = ['all', 'fashion', 'commercial', 'runway', 'fitness'];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Our Portfolio</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the faces that define the next generation of style.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm uppercase tracking-widest px-2 py-1 transition-all duration-300 ${
                filter === cat 
                  ? 'text-gold font-bold border-b-2 border-gold' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredModels.map((model) => (
            <div key={model.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/5">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <div>
                  <h3 className="text-lg font-serif font-medium text-white group-hover:text-gold transition-colors">{model.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{model.category}</p>
                </div>
                <div className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-gray-400">Height: {model.height}</p>
                  <p className="text-xs text-gray-400">Shoe: {model.shoe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};