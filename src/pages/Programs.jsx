import React, { useState } from 'react';
import './Programs.scss';

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

export const Programs = () => {
  const [filter, setFilter] = useState('all');

  const filteredModels = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(m => m.category === filter);

  const categories = ['all', 'fashion', 'commercial', 'runway', 'fitness'];

  return (
    <div className="programs-page">
      <div className="programs-container">
        
        {/* Header Section */}
        <div className="programs-header">
          <span className="subtitle">
            Our Curriculum
          </span>
          <h1>
            Program Overview
          </h1>
          <p>
            Explore the diverse disciplines covered in our intensive training modules. 
            From high-fashion editorial to commercial lifestyle, we shape versatile talent.
          </p>
        </div>

        {/* Filter */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="programs-grid">
          {filteredModels.map((model) => (
            <div key={model.id} className="program-card">
              <div className="image-wrapper">
                <img 
                  src={model.image} 
                  alt={model.name}
                  loading="lazy"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="card-overlay">
                 <h3>{model.name}</h3>
                 <div className="divider"></div>
                 <p>{model.category} Specialization</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};