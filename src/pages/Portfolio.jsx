import React, { useState } from 'react';

// Extended mock data
const portfolioData = [
  { id: '1', name: 'Elena V', category: 'fashion', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA==', height: '5\'10"', shoe: '8' },
  { id: '2', name: 'Marcus T', category: 'runway', image: 'https://indianpolos.com/wp-content/uploads/2024/01/man-walking-beside-the-road-scaled.jpg.webp', height: '6\'2"', shoe: '11' },
  { id: '3', name: 'Sarah J', category: 'commercial', image: 'https://indianpolos.com/wp-content/uploads/2024/01/woman-in-yellow-tracksuit-standing-on-basketball-court-side-1-scaled.jpg.webp', height: '5\'9"', shoe: '7.5' },
  { id: '4', name: 'Liam K', category: 'fitness', image: 'https://img.freepik.com/free-photo/side-view-fit-man-posing-while-wearing-tank-top-with-crossed-arms_23-2148700611.jpg?semt=ais_hybrid&w=740&q=80', height: '6\'0"', shoe: '10' },
  { id: '5', name: 'Olivia R', category: 'fashion', image: 'https://assets.vogue.in/photos/5e5f7ab335619f0008e2decf/2:3/w_2560%2Cc_limit/Priyal_%2520Y%2520_Project%2520Fall%25202020.jpg', height: '5\'11"', shoe: '8.5' },
  { id: '6', name: 'Noah P', category: 'commercial', image: 'https://indianpolos.com/wp-content/uploads/2024/01/man-in-black-polo-shirt-scaled.jpg.webp', height: '6\'1"', shoe: '10.5' },
  { id: '7', name: 'Ava L', category: 'runway', image: 'https://indianpolos.com/wp-content/uploads/2024/01/woman-in-green-dress-sitting-on-concrete-bench-2-scaled.jpg.webp', height: '5\'9.5"', shoe: '8' },
  { id: '8', name: 'Ethan W', category: 'fitness', image: 'https://caroseditorial.com/wp-content/uploads/2021/05/Black-male-model-fashion-photoshoot-8-683x1024.jpg', height: '6\'3"', shoe: '12' },
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105  group-hover:grayscale-0"
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