import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PageRoute } from '@/constants/types';
import './About.scss';

export const About = () => {
  const location = useLocation();

  // Handle auto-scrolling when URL has a hash (e.g., #workshops)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="lumina-about">
      {/* Hero Section from Home Page */}
      {/* <section className="hero-section">
        <h1 className="hero-title">
          Royal Runway Fashion
        </h1>
        <p className="hero-subtitle">
          Where Elegance Meets <span className="highlight">Opportunity</span>
        </p>
        
        <div className="hero-image-wrapper">
          <img
            src="https://royalrunway.my.canva.site/_assets/media/972518e913ca8bc28f2a573344a4a5b6.jpg"
            alt="Royal Runway Model"
          />
          <div className="image-overlay"></div>
        </div>

        <div className="hero-cta-wrapper">
           <Link to={`${PageRoute.EVENTSPRODUCTION}#workshops`} className="hero-btn">Apply for Workshop</Link>
        </div>
      </section> */}

      {/* About Section from Home Page (Gold Background) with UPDATED TEXT */}
      <section className="home-about-section">
        <div className="home-about-content">
          
          {/* Section 1: Journey Label + About Us */}
          <div className="about-split-block">
            <span className="small-heading">
              My Fashion Journey
            </span>
            <h3 className="main-heading">
              About Us
            </h3>
            <div className="text-body">
              <p>
                Founded with a bold vision to bring the world of fashion closer to talent everywhere, our platform exists to bridge global opportunity with extraordinary potential. We create access, visibility, and transformation for designers and models by opening doors to the world’s most prestigious fashion capitals.
              </p>
              <p>
                At the heart of our mission is the belief that talent knows no boundaries. We curate, elevate, and connect creatives globally — shaping careers, fostering collaboration, and redefining what is possible in the international fashion industry.
              </p>
            </div>
          </div>

          {/* --- NEW MID-SECTION IMAGES (3 Images) --- */}
          <div className="about-mid-visuals">
            {/* Image 1: Runway Atmosphere */}
            <div className="img-box">
              <img 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop" 
                alt="Runway Atmosphere" 
              />
            </div>
            {/* Image 2: Gold/Fabric Detail */}
            <div className="img-box">
              <img 
                src='https://indianpolos.com/wp-content/uploads/2024/01/man-walking-beside-the-road-scaled.jpg.webp' 
                alt="Fashion Detail" 
              />
            </div>
            {/* Image 3: Model Portrait */}
            <div className="img-box">
              <img 
                src='https://assets.vogue.in/photos/5e5f7ab335619f0008e2decf/2:3/w_2560%2Cc_limit/Priyal_%2520Y%2520_Project%2520Fall%25202020.jpg' 
                alt="Model Portrait" 
              />
            </div>
          </div>

          {/* Section 2: Founder’s Note */}
          <div className="about-split-block secondary">
            <h3 className="main-heading">
              Founder’s Note
            </h3>
            <div className="text-body">
              <p>
                I am Sujitha Karayil, Winner of Mrs. Elite Universe – Chicago, USA 2026, and the founder of this global fashion platform.
              </p>
              <p>
                My journey on international stages inspired me to create more than personal success — a platform that brings the world closer and places global opportunities within reach for designers and models everywhere. This is a movement to empower, connect, and elevate talent globally.
              </p>
            </div>
          </div>

        </div>
        
        <div className="home-about-image-wrapper">
          <img
            src="https://royalrunway.my.canva.site/_assets/media/586f619d6c1be9574e0ca3e8117d0d75.jpg"
            alt="Founder Portrait"
          />
        </div>
      </section>

      {/* Services Section Removed from here and moved to Home Page */}
      
      {/* Experience Section Removed from here and moved to Home Page */}
      
      <div className="lumina-about__layout">
         {/* Layout container kept for structure if needed, currently empty */}
      </div>
    </div>
  );
};

export default About;