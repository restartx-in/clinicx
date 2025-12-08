
import React from 'react';
import { Star, Camera, Video, Globe, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from '@/constants/types';
import './FashionShow.scss';

export const FashionShow = () => {
  return (
    <div className="fashion-show-page">
      
      {/* 1. Hero Section (Matches provided image) */}
      <section className="fs-hero">
        <div className="fs-hero__content">
          {/* Left Column */}
          <div className="fs-hero__left">
            <span className="fs-subtitle">ORGANIZING HIGH-IMPACT EVENTS</span>
            <h1 className="fs-title">
              Fashion Show<br />
              Production
            </h1>
          </div>

          {/* Right Column */}
          <div className="fs-hero__right">
            <div className="feature-group">
              <span className="asterisk">*</span>
              <div className="text-content">
                <h3>EVENT PLANNING</h3>
                <p>Meticulous Coordination</p>
                <p>Creative Concepts</p>
              </div>
            </div>

            <div className="feature-group">
              <span className="asterisk">*</span>
              <div className="text-content">
                <h3>SHOW EXECUTION</h3>
                <p>Expert Management</p>
                <p>Seamless Flow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cannes / Luxury Package Section */}
      <section className="fs-package">
        <div className="fs-package__container">
          <div className="fs-header">
            <span className="tagline">The Royal Experience</span>
            <h2>All-Inclusive Luxury Package</h2>
            <p>Prepare for the spotlight. Our comprehensive package ensures you are runway-ready for the Cannes Fashion Show and beyond.</p>
          </div>

          <div className="fs-grid">
            <div className="fs-card">
              <Star className="icon" />
              <h3>Styling & Wardrobe</h3>
              <p>Two designer outfits with complete styling & accessories curated by industry experts.</p>
            </div>
            
            <div className="fs-card">
              <Sparkles className="icon" />
              <h3>Grooming</h3>
              <p>Professional hair & makeup by top-tier artists plus 1-month online grooming training.</p>
            </div>
            
            <div className="fs-card">
              <Camera className="icon" />
              <h3>Photoshoot</h3>
              <p>Professional outdoor photoshoot in designer wear at a premium location.</p>
            </div>
            
            <div className="fs-card">
              <Video className="icon" />
              <h3>Media</h3>
              <p>Red carpet photoshoot, cinematic highlight video & curated social media reels.</p>
            </div>

            <div className="fs-card">
              <Globe className="icon" />
              <h3>Training</h3>
              <p>1 full day of in-person training: ramp walk, dress rehearsal, choreography & posing.</p>
            </div>

            <div className="fs-card highlight-card">
              <div className="card-bg"></div>
              <div className="content">
                 <h3>A Chance to Shine</h3>
                 <p>One model will be selected & fully sponsored to compete in <strong>Miss & Mrs. Glam World</strong> and <strong>Miss & Mrs. Asia Global</strong>.</p>
              </div>
            </div>
          </div>

          <div className="fs-cta">
            <p>Show Opener & Show Stopper spots available at additional cost.</p>
            <Link to={PageRoute.CONTACT} className="btn-register">Apply for Season 2</Link>
          </div>
        </div>
      </section>

    </div>
  );
};