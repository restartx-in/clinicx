
import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '@/constants/types';
import './Home.scss';

export const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Royal Runway
        </h1>
        <p className="hero-subtitle">
          Where Elegance Meets <span className="highlight">Opportunity</span>
        </p>
        
        {/* Center Hero Image */}
        <div className="hero-image-wrapper">
          <img
            src="https://royalrunway.my.canva.site/_assets/media/972518e913ca8bc28f2a573344a4a5b6.jpg"
            alt="Royal Runway Model"
          />
          <div className="image-overlay"></div>
        </div>

        <div className="hero-cta-wrapper">
           <Link to={PageRoute.WORKSHOP} className="hero-btn">Apply for Workshop</Link>
        </div>
      </section>

      {/* About Section (Gold Background) */}
      <section className="home-about-section">
        {/* Left Content */}
        <div className="home-about-content">
          <span className="small-heading">
            My Fashion Journey
          </span>
          <h2 className="main-heading">
            About Me
          </h2>

          <div className="text-body">
            <p>
              With a passion for elegance and creativity, I stepped into a career shaping the future of fashion, guided by deep inspiration and a powerful sense of calling.
            </p>
            <p>
              My pageant journey reflects that no matter what stage of life you are in, you can be, do, or have anything your heart desires.
            </p>
            <p>
              <strong>It is not bound by timelines—your moment begins the day you choose to start.</strong> Each milestone strengthened my commitment to empower aspiring queens, helping them build confidence, presence, and a legacy of their own. Today, my experience fuels a mission centered on excellence, mentorship, and elevating women to shine with elegance and strength.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="home-about-image-wrapper">
          <img
            src="https://royalrunway.my.canva.site/_assets/media/586f619d6c1be9574e0ca3e8117d0d75.jpg"
            alt="Founder Portrait"
          />
        </div>
      </section>

      {/* Services Section (Dark Background) */}
      <section className="services-section">
          <div className="services-label">
            <h3>SERVICES OFFERED</h3>
          </div>
        <div className="services-container">
          
          <div className="services-list">
            {/* Service 1 */}
            <div className="service-item">
              <span className="service-category">WORKSHOPS</span>
              <h2>Mastering the Runway</h2>
              <span className="service-sub">KEY COMPONENTS OF OUR TRAINING</span>
              <p>
                Our training sessions are designed to equip aspiring models with the essential skills needed for success.
                Participants engage in practical exercises and receive personalized feedback, ensuring they develop confidence and
                grace on the runway, preparing them for the competitive fashion industry.
              </p>
            </div>

            {/* Service 2 */}
            <div className="service-item">
              <span className="service-category">TRAINING</span>
              <h2>Workshops</h2>
              <span className="service-sub">COMPREHENSIVE LEARNING EXPERIENCES</span>
              <p>
                Ramp walk coaching focuses on refining posture, stride, and overall presence. Through intensive practice and
                expert guidance, models learn to exude elegance and poise, making a lasting impression during fashion shows and
                events, essential for their professional development.
              </p>
            </div>

            {/* Service 3 */}
            <div className="service-item">
              <span className="service-category">RAMP WALKS</span>
              <h2>Special Events</h2>
              <span className="service-sub">UNIQUE OPPORTUNITIES FOR NETWORKING AND SKILL ENHANCEMENT</span>
              <p>
                Our workshops provide hands-on experience in various aspects of modeling. From styling tips to makeup
                application, participants gain valuable insights from industry professionals, enhancing their skills and boosting their
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};