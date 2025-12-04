import React from 'react';
import './PhotoRoller.scss';

const models = [
  
  { id: 1, name: "Elena V", category: "Editorial", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800" },
  { id: 2, name: "Marcus T", category: "Runway", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800" },
  { id: 3, name: "Sarah J", category: "Commercial", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800" },
  { id: 4, name: "Liam K", category: "Fitness", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800" },
  { id: 5, name: "Olivia R", category: "Fashion", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800" },
];

export const PhotoRoller = () => {
  const rollerContent = [...models, ...models]; // Duplicate for infinite loop

  return (
    <div className="lumina-roller">
      <div className="lumina-roller__header">
        <h2>Featured <span>Faces</span></h2>
      </div>
      <div className="lumina-roller__track">
        {rollerContent.map((model, index) => (
          <div key={`${model.id}-${index}`} className="lumina-roller__item">
            <img src={model.img} alt={model.name} loading="lazy" />
            <div className="item-overlay">
              <h3>{model.name}</h3>
              <p>{model.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};