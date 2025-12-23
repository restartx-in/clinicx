import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { PageRoute } from "@/constants/types";
import "./about.scss";

export const About = () => {
  const location = useLocation();

  // Handle auto-scrolling when URL has a hash (e.g., #workshops)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  const galleryItems = [
    {
      id: 1,
      title: "Runway Walk Highlights",
      src: "src/assets/Gallery/1.mp4",
    },
    {
      id: 2,
      src: "src/assets/Gallery/2.mp4",
    },
    {
      id: 3,
      src: "src/assets/Gallery/3.mp4",
    },
    {
      id: 4,
      src: "src/assets/Gallery/4.MOV",
    },
  ];

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
            <h3 className="main-heading">About Us</h3>
            <div className="text-body">
              <p>
                I’m Sujitha Karayil, Winner of Mrs. Elite Universe – Chicago,
                USA 2026, and the founder of this global fashion platform.
                <br />
                <br />
                My journey on international stages taught me that fashion is
                more than glamour—it is access, opportunity, and voice. I
                believe the right platform can unlock potential, build
                confidence, and elevate talent to the global stage.
                <br />
                <br />
                We exist to break boundaries, connect cultures, and make
                world-class opportunities accessible to designers and models—no
                matter where they begin. Here, talent is nurtured, creativity is
                celebrated, and dreams are given a runway without borders.
                <br />
                <br />
                It is a movement to empower, elevate, and inspire—helping
                designers and models step confidently onto the global stage and
                make their mark on the world.
              </p>
            </div>
          </div>

          {/* --- NEW MID-SECTION IMAGES (3 Images) --- */}
          <div className="about-mid-visuals">
            {/* Image 1: Runway Atmosphere */}
            <div className="img-box">
              <img
                src="src/assets/AboutUs/about-us-4.jpeg"
                alt="Runway Atmosphere"
              />
            </div>
            {/* Image 2: Gold/Fabric Detail */}
            <div className="img-box">
              <img
                src="src/assets/AboutUs/about-us-2.JPG"
                alt="Fashion Detail"
              />
            </div>
            {/* Image 3: Model Portrait */}
            <div className="img-box">
              <img
                src="src/assets/AboutUs/about-us-3.JPG"
                alt="Model Portrait"
              />
            </div>
          </div>

          {/* Section 2: Founder’s Note */}
          {/* <div className="about-split-block secondary">
            <h3 className="main-heading">Founder’s Note</h3>
            <div className="text-body">
              <p>
                I am Sujitha Karayil, Winner of Mrs. Elite Universe – Chicago,
                USA 2026, and the founder of this global fashion platform.
              </p>
              <p>
                My journey on international stages inspired me to create more
                than personal success — a platform that brings the world closer
                and places global opportunities within reach for designers and
                models everywhere. This is a movement to empower, connect, and
                elevate talent globally.
              </p>
            </div>
          </div> */}
        </div>

        <div className="home-about-image-wrapper">
          <img
            src="src/assets/AboutUs/about-us-main.JPG"
            alt="Founder Portrait"
          />
        </div>
      </section>

      <section className="royal-gallery" id="gallery">
        <div className="gallery-header">
          <span className="gallery-label">THE ROYAL EXPERIENCE</span>
          <h2>Runway Moments & Fashion Films</h2>
          <p>
            A curated glimpse into our runway productions, backstage artistry,
            and cinematic fashion storytelling.
          </p>
        </div>

        <div className="gallery-grid">
          {/* Card 1 */}
          {galleryItems.map((item) => (
            <div className="gallery-card">
              <video src={item.src} muted loop autoPlay playsInline />
              <div className="gallery-overlay">
                <h3>Royal Runway</h3>
                <span>Fashion Week</span>
              </div>
            </div>
          ))}
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
