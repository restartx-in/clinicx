import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '@/constants/types'; // Assuming PageRoute is in this path
import './Home.scss';

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

const categories = ['Designer Collective', 'Global Models', 'Runway Academy', 'Gallery'];

const categoryToPath = {
  'Designer Collective': PageRoute.DESIGNER_COLLECTIVE,
  'Global Models': PageRoute.GLOBAL_MODELS,
  'Runway Academy': PageRoute.RUNWAY_ACADEMY,
  'Gallery': PageRoute.GALLERY || '#', 
};


export const Home = () => {
  return (
    <div className="programs-page">
      <div className="programs-container">
        
        {/* Header Section */}
        <div className="programs-header">
          <span className="subtitle ">
           where global fashion Meets opportunity
          </span>
          <h1>
            Fashion Show Production
          </h1>
          <p>
            Explore our comprehensive services for designers, models, and aspiring talents. From curating and producing fashion shows on global stages to intensive model training and runway academy programs, we bring your fashion vision to life.
          </p>
        </div>

        {/* Navigation Bar */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <Link key={cat} to={categoryToPath[cat]} className="filter-link">
              <button className="filter-btn">
                {cat}
              </button>
            </Link>
          ))}
        </div>

        {/* Grid of Models */}
        <div className="programs-grid">
          {portfolioData.map((model) => (
            <div key={model.id} className="program-card">
              <div className="image-wrapper">
                <img 
                  src={model.image} 
                  alt={model.name}
                  loading="lazy"
                />
              </div>
              
              <div className="card-overlay">
                 <h3>{model.name}</h3>
                 <div className="divider"></div>
                 <p>{model.category} Specialization</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section Moved from About Page */}
      <section className="services-section">
          <div className="services-label">
            <h3>SERVICES OFFERED</h3>
          </div>
        <div className="services-container">
          <div className="services-list">
            <Link 
              to={`${PageRoute.EVENTSPRODUCTION}#workshops`} 
              className="service-item" 
              style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}
            >
              <span className="service-category">WORKSHOPS</span>
              <h2>Mastering the Runway</h2>
              <span className="service-sub">KEY COMPONENTS OF OUR TRAINING</span>
              <p>
                Our training sessions are designed to equip aspiring models with the essential skills needed for success.
                Participants engage in practical exercises and receive personalized feedback, ensuring they develop confidence and
                grace on the runway, preparing them for the competitive fashion industry.
              </p>
            </Link>
            <Link 
              to={`${PageRoute.EVENTSPRODUCTION}#workshops`} 
              className="service-item" 
              style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}
            >
              <span className="service-category">TRAINING</span>
              <h2>Workshops</h2>
              <span className="service-sub">COMPREHENSIVE LEARNING EXPERIENCES</span>
              <p>
                Ramp walk coaching focuses on refining posture, stride, and overall presence. Through intensive practice and
                expert guidance, models learn to exude elegance and poise, making a lasting impression during fashion shows and
                events, essential for their professional development.
              </p>
            </Link>
            <Link 
              to={`${PageRoute.EVENTSPRODUCTION}#workshops`} 
              className="service-item" 
              style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}
            >
              <span className="service-category">RAMP WALKS</span>
              <h2>Special Events</h2>
              <span className="service-sub">UNIQUE OPPORTUNITIES FOR NETWORKING AND SKILL ENHANCEMENT</span>
              <p>
                Our workshops provide hands-on experience in various aspects of modeling. From styling tips to makeup
                application, participants gain valuable insights from industry professionals, enhancing their skills and boosting their
                confidence.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;