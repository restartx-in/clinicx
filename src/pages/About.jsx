import React from 'react';
import { Camera, Users, Award, Briefcase } from 'lucide-react';
import './About.scss';

export const About = () => {
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
            About <span>Lumina</span>
          </h1>
        </div>
      </div>

      <div className="lumina-about__layout">
        {/* Main Content (Bio) */}
        <div className="lumina-about__bio">
          <div className="lumina-about__bio-info">
            <h2>A Legacy of Excellence</h2>
            <p>
              Founded in 2024, Lumina Management has quickly risen to become a premier boutique agency. 
              We believe in quality over quantity, managing a select board of talent that we truly believe in.
            </p>
            <p>
              Our approach is personal. We develop our models holistically, focusing not just on their look, 
              but on their career longevity, personal brand, and physical well-being.
            </p>
            <div className="lumina-about__bio-stats">
              <div className="stat-box">
                <h4>50+</h4>
                <p>Top Models</p>
              </div>
              <div className="stat-box">
                <h4>200+</h4>
                <p>Campaigns</p>
              </div>
            </div>
          </div>
          
          <div className="lumina-about__bio-visual">
            <img 
              src="https://img2.wallspic.com/previews/0/4/0/5/6/165040/165040-gigi_hadid-model-celebrity-hair-glasses-550x310.jpg" 
              alt="Backstage" 
              className="bio-img"
            />
            {/* Decoration elements */}
            <div className="visual-deco visual-deco--dark"></div>
            <div className="visual-deco visual-deco--gold"></div>
          </div>
        </div>

        {/* Features / Values */}
        <div className="lumina-about__values">
          <div className="value-card">
            <Camera className="card-icon" />
            <h3>Editorial</h3>
            <p>Securing covers on Vogue, Elle, and Harper's Bazaar.</p>
          </div>
          <div className="value-card">
            <Users className="card-icon" />
            <h3>Development</h3>
            <p>Comprehensive training for new faces.</p>
          </div>
          <div className="value-card">
            <Briefcase className="card-icon" />
            <h3>Management</h3>
            <p>Strategic career planning and contract negotiation.</p>
          </div>
          <div className="value-card">
            <Award className="card-icon" />
            <h3>Reputation</h3>
            <p>Recognized globally for integrity and style.</p>
          </div>
        </div>
      </div>
    </div>
  );
};