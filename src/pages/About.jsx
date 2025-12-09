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
      {/* Hero */}
      <div className="lumina-about__hero">
        <div 
          className="lumina-about__hero-bg"
          style={{ backgroundImage: 'url("https://www.ppa.com/assets/images/ppmag_articles/header-72020jaimayhew9.jpg")' }}
        >
          <div className="lumina-about__hero-overlay"></div>
        </div>
        <div className="lumina-about__hero-content">
          <h1>
            Events & <span>Production</span>
          </h1>
        </div>
      </div>

      <div className="lumina-about__layout">
        
        {/* Bio / Legacy Section (Gold Background) */}
        <div className="lumina-about__bio">
          <div className="lumina-about__bio-info">
            <h2>The Royal Runway Experience</h2>
            <p>
              We specialize in organizing high-impact events and full-scale fashion show production. 
              Our mission is to provide a platform where aspiring models can shine on an international scale.
            </p>
            <p>
              From local luxury runways to international stages, we curate experiences that blend high fashion with professional development.
            </p>
            
            <div className="lumina-about__bio-stats">
              <div className="stat-box">
                <h4>May 2nd</h4>
                <p>Season 2 Show</p>
              </div>
              <div className="stat-box">
                <h4>Aug 2026</h4>
                <p>Intl. Pageant</p>
              </div>
            </div>
          </div>
          
          {/* Right side image for Bio */}
          <div className="lumina-about__bio-visual">
            <img 
              src="https://img2.wallspic.com/previews/0/4/0/5/6/165040/165040-gigi_hadid-model-celebrity-hair-glasses-550x310.jpg" 
              alt="Backstage" 
              className="bio-img"
            />
          </div>
        </div>

        <div id="workshops" className="lumina-about__workshops">
          <h3 className="section-label">WORKSHOPS OFFERED</h3>
          
          <div className="workshops-grid">
            {/* Card 1 */}
            <Link 
              to={PageRoute.FASHION_SHOW} 
              className="workshop-card"
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <h4>PERSONALIZED COACHING FOR EACH MODEL</h4>
              <div className="img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=800&auto=format&fit=crop" 
                  alt="Personalized Coaching" 
                />
              </div>
              <p>
                Our workshops offer hands-on training for models at all levels.
              </p>
            </Link>

            {/* Card 2 */}
            <Link 
              to={PageRoute.FASHION_SHOW} 
              className="workshop-card"
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <h4>ESSENTIAL SKILLS FOR THE RUNWAY</h4>
              <div className="img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop" 
                  alt="Group Runway Skills" 
                />
              </div>
              <p>
                Tailored sessions focus on individual strengths and growth areas.
              </p>
            </Link>

            {/* Card 3 */}
            <Link 
              to={PageRoute.FASHION_SHOW} 
              className="workshop-card"
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <h4>INDUSTRY INSIGHTS AND NETWORKING OPPORTUNITIES</h4>
              <div className="img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop" 
                  alt="Industry Insights" 
                />
              </div>
              <p>
                Participants learn vital techniques for walking and posing effectively.
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};