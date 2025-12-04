import React, { useState } from 'react';

// Extended mock data (Re-purposed as "Program Modules" or "Success Stories" contextually)
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

export const Programs = () => {
  const [filter, setFilter] = useState('all');

  const filteredModels = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(m => m.category === filter);

  const categories = ['all', 'fashion', 'commercial', 'runway', 'fitness'];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <span className="text-[#c4a484] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Our Curriculum
          </span>
          <h1 className="text-5xl md:text-7xl font-thin mb-8 text-white uppercase tracking-wider">
            Program Overview
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed tracking-wide">
            Explore the diverse disciplines covered in our intensive training modules. 
            From high-fashion editorial to commercial lifestyle, we shape versatile talent.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-[0.2em] px-4 py-2 transition-all duration-300 border border-transparent ${
                filter === cat 
                  ? 'text-[#c4a484] border-[#c4a484]' 
                  : 'text-gray-500 hover:text-white hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
          {filteredModels.map((model) => (
            <div key={model.id} className="group relative bg-[#121212]">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100  group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                 <h3 className="text-xl font-serif text-[#c4a484] italic mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                   {model.name}
                 </h3>
                 <div className="w-8 h-px bg-white/50 mb-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                 <p className="text-[10px] text-white uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                   {model.category} Specialization
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};