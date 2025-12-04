import React from 'react';
import './Home.scss';

export const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title ">
          Model Portfolio
        </h1>
        <p className="hero-subtitle">
          Showcasing{" "}
          <span className="highlight">
            Talent and Training
          </span>
          <br />
          for Aspiring Models
        </p>

        {/* Center Hero Image */}
        <div className="hero-image-wrapper">
          <img
            src="https://royalrunway.my.canva.site/_assets/media/972518e913ca8bc28f2a573344a4a5b6.jpg"
            alt="Runway Model Red Dress"
          />
          {/* Overlay gradient/ring */}
          <div className="image-overlay"></div>
        </div>
      </section>

      {/* About Section */}
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
              With a passion for{" "}
              <strong>
                elegance and creativity
              </strong>
              , I have dedicated my career to shaping the future of fashion.
            </p>
            <p>
              My commitment to{" "}
              <strong>
                excellence and skill development
              </strong>{" "}
              ensures that aspiring models receive the highest level of training
              and support, preparing them for success on the runway and beyond.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="home-about-image-wrapper">
          <img
            src="https://royalrunway.my.canva.site/_assets/media/586f619d6c1be9574e0ca3e8117d0d75.jpg"
            alt="Fashion Portrait"
          />
        </div>
      </section>
    </div>
  );
};