import React from "react";
// Importing icons for the benefits section
import { FaGlobe, FaUsers, FaLightbulb } from "react-icons/fa";
import "./DesignerCollective.scss";

// --- Sample Data (Can be replaced with your actual data) ---

// Data for the "For Designers" event cards
const designerEvents = [
  {
    name: "Cannes Fashion Week",
    date: "May 21st, 2026",
    location: "Cannes",
    link: "#",
  },
  {
    name: "Dubai Fashion Week",
    date: "August 2026",
    location: "Dubai",
    link: "#",
  },
  {
    name: "New York Fashion Week",
    date: "September 2026",
    location: "New York",
    link: "#",
  },
  {
    name: "Los Angeles Fashion Week",
    date: "October 2026",
    location: "Los Angeles",
    link: "#",
  },
];

// Data for the "Featured Designers" section
const featuredDesigners = [
  {
    name: "Elena Velez",
    specialty: "Avant-Garde Couture",
    bio: "Known for her deconstructed approach and use of industrial materials, creating pieces that challenge conventional beauty.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/ELENA_VELEZ%2C_2023.png" },
  {
    name: "Kenji Tanaka",
    specialty: "Minimalist Streetwear",
    bio: "Fuses traditional Japanese minimalism with modern urban aesthetics, focusing on clean lines and sustainable fabrics.",
    imageUrl:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sofia Reyes",
    specialty: "Bohemian Luxury",
    bio: "Her collections celebrate free-spirited elegance with intricate embroidery, flowing silhouettes, and rich, earthy tones.",
    imageUrl:
      "https://www.billboard.com/wp-content/uploads/2023/11/Sofia-Reyes-MILAMORES-cr-Steph-Munguia-press-2023-billboard-1548.jpg?w=942&h=628&crop=1",
  },
];

export const DesignerCollective = () => {
  return (
    <div className="designer-collective-page">
      <div className="dc-container">
        {/* --- Section 1: For Designers (Original) --- */}
        <div className="dc-header">
          <h1>For Designers</h1>
          <p>
            Showcase your talent globally and compete alongside international
            designers in the world's most prestigious fashion weeks.
          </p>
        </div>
        <div className="dc-events-grid">
          {designerEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-card-content">
                <h3>{event.name}</h3>
                <p className="event-details">
                  Event Date: {event.date},<br />
                  {event.location}
                </p>
              </div>
              <a href={event.link} className="apply-button">
                Apply
              </a>
            </div>
          ))}
        </div>

        {/* --- Section 2: Featured Designers (New) --- */}
        <div className="dc-section-header">
          <span className="subtitle">Our Visionaries</span>
          <h2>Meet the Collective</h2>
          <p>
            We are proud to collaborate with designers who are pushing the
            boundaries of fashion.
          </p>
        </div>
        <div className="featured-designers-grid">
          {featuredDesigners.map((designer, index) => (
            <div className="designer-profile-card" key={index}>
              <div className="designer-image-wrapper">
                <img src={designer.imageUrl} alt={designer.name} />
              </div>
              <div className="designer-info">
                <h4>{designer.name}</h4>
                <span className="specialty">{designer.specialty}</span>
                <p>{designer.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Section 3: Why Collaborate? (New) --- */}
        <div className="dc-section-header">
          <span className="subtitle">The Royal Runway Advantage</span>
          <h2>Why Collaborate With Us?</h2>
          <p>
            Joining our collective opens doors to unparalleled opportunities and
            support.
          </p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-item">
            <FaGlobe className="benefit-icon" />
            <h4>Global Exposure</h4>
            <p>
              Showcase your collections on prestigious international runways
              from New York to Dubai.
            </p>
          </div>
          <div className="benefit-item">
            <FaUsers className="benefit-icon" />
            <h4>Elite Networking</h4>
            <p>
              Connect with industry leaders, buyers, press, and fellow visionary
              designers.
            </p>
          </div>
          <div className="benefit-item">
            <FaLightbulb className="benefit-icon" />
            <h4>Creative Freedom</h4>
            <p>
              We provide the platform and production support, allowing you to
              focus on your creative vision.
            </p>
          </div>
        </div>

        {/* --- Section 4: Final CTA (New) --- */}
        <div className="dc-cta-section">
          <h2>Become a Part of the Movement</h2>
          <p>
            Are you ready to elevate your brand and share your vision with the
            world? We invite you to apply and join a collective that celebrates
            innovation and creativity.
          </p>
          <a href="#" className="cta-button">
            Apply to the Collective
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesignerCollective;
