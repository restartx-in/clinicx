import React, { useState, useEffect } from 'react';
import './Home.scss';

// Array of high-quality runway images for the slider
const sliderImages = [
  "https://royalrunway.my.canva.site/_assets/media/972518e913ca8bc28f2a573344a4a5b6.jpg", // Original Red Dress
  "https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHwwfDB8fHww",             // Runway Walk
  "https://plus.unsplash.com/premium_photo-1727173974069-42a24f663793?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",             // Fashion Week
  "https://plus.unsplash.com/premium_photo-1682095754287-7ae4fbc5fe11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D"              // Model Aesthetic
];

export const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to handle automatic slide changing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

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

        {/* Center Hero Image Slider */}
        <div className="hero-image-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
          {sliderImages.map((imageUrl, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: currentImageIndex === index ? 1 : 0,
                transition: 'opacity 1.5s ease-in-out',
                zIndex: currentImageIndex === index ? 1 : 0
              }}
            >
              <img
                src={imageUrl}
                alt={`Runway Model ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  // Optional: Add a subtle slow zoom effect for extra beauty
                  transform: currentImageIndex === index ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 6s ease-out'
                }}
              />
            </div>
          ))}
          
          {/* Overlay gradient/ring */}
          <div className="image-overlay" style={{ zIndex: 10 }}></div>
          
          {/* Optional: Slider Dots/Indicators */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            display: 'flex',
            gap: '10px'
          }}>
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: currentImageIndex === index ? '#fff' : 'rgba(255,255,255,0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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