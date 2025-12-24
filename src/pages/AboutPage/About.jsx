import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { PageRoute } from "@/constants/types";
import "./about.scss";
import Spot from "@/assets/AboutUs/about-us-main.JPG";
import AboutUs1 from "@/assets/AboutUs/about-us-4.jpeg";
import AboutUs2 from "@/assets/AboutUs/about-us-2.JPG";
import AboutUs3 from "@/assets/AboutUs/about-us-3.JPG";

import Gallery1 from "@/assets/Gallery/1.mp4";
import Gallery2 from "@/assets/Gallery/2.mp4";
import Gallery3 from "@/assets/Gallery/3.mp4";
import Gallery4 from "@/assets/Gallery/4.MOV";
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
      src: Gallery1,
    },
    {
      id: 2,
      src: Gallery2,
    },
    {
      id: 3,
      src: Gallery3,
    },
    {
      id: 4,
      src: Gallery4,
    },
  ];

  const AboutsImageCard = [AboutUs1, AboutUs2, AboutUs3];
  const [activeIndex, setActiveIndex] = useState(null);

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

            {AboutsImageCard.map((item) => (
              <div className="img-box">
                <img src={item} alt="Runway Atmosphere" />
              </div>
            ))}
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
          <img src={Spot} alt="Founder Portrait" />
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
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={index}
              src={item.src}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
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

function GalleryCard({ src, index, activeIndex, setActiveIndex }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset when another card becomes active
  useEffect(() => {
    if (activeIndex !== index) {
      const video = videoRef.current;
      if (!video) return;

      video.pause();
      video.muted = true;
      video.loop = true;
      video.controls = false;
      video.currentTime = 0;

      setIsPlaying(false);
    }
  }, [activeIndex, index]);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    // If this card is not active → play immediately
    if (activeIndex !== index) {
      setActiveIndex(index);

      video.loop = false;
      video.controls = true;
      video.muted = false;
      video.play();
      setIsPlaying(true);
      return;
    }

    // If same card → toggle
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="gallery-card" onClick={handleClick}>
      <video ref={videoRef} src={src} muted loop autoPlay playsInline />

      {activeIndex === index && (
        <div className="play-overlay">{isPlaying ? "❚❚" : "▶"}</div>
      )}

      <div className="gallery-overlay">
        <h3>Royal Runway</h3>
        <span>Fashion Week</span>
      </div>
    </div>
  );
}

function stopAllVideos() {
  document.querySelectorAll("video").forEach((v) => {
    v.pause();
    v.muted = true;
    v.loop = true;
    v.controls = false;
    v.currentTime = 0;
  });
}

export default About;
