import React, { useRef } from "react";
import {
  FaGlobe,
  FaCamera,
  FaBullhorn,
  FaHandshake,
  FaLaptop,
  FaTrophy,
  FaTools,
  FaPlane,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import "./DesignerCollective.scss";

import posterImg1 from "@/assets/DesignerCollective/image-1.jpeg";
import posterImg2 from "@/assets/DesignerCollective/image-2.jpeg";
import posterImg3 from "@/assets/DesignerCollective/image-3.jpeg";
import posterImg4 from "@/assets/DesignerCollective/image-4.jpeg";

const showcasePosters = [
  { id: 1, title: "Showcase 1", src: posterImg1 },
  { id: 2, title: "Showcase 2", src: posterImg2 },
  { id: 3, title: "Showcase 3", src: posterImg3 },
  { id: 4, title: "Showcase 4", src: posterImg4 },
  // { id: 5, title: "Showcase 5", src: posterImg5 },
];
const designerEvents = [
  {
    name: "New York Fashion Week",
    date: "September 2026",
    location: "New York, USA",
    link: "#",
    image: posterImg4,
  },
  {
    name: "Los Angeles Fashion Week",
    date: "October 2026",
    location: "Los Angeles, USA",
    link: "#",
    image: posterImg3,
  },
  {
    name: "Cannes Fashion Week",
    date: "May 21st, 2026",
    location: "Cannes, France",
    link: "#",
    image: posterImg1,
  },
  {
    name: "Dubai Fashion Week",
    date: "August 2026",
    location: "Dubai, UAE",
    link: "#",
    image: posterImg2,
  },
];

const featuredDesigners = [
  {
    name: "Elena Velez",
    specialty: "Avant-Garde Couture",
    bio: "Known for her deconstructed approach and use of industrial materials, creating pieces that challenge conventional beauty.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/ELENA_VELEZ%2C_2023.png",
  },
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

// UPDATED: Structured Data for Grid Cards (Replaces the text list)
const showcaseFeatures = [
  {
    icon: <FaGlobe />,
    title: "Global Runway Access",
    desc: "Participation at Cannes, Dubai, New York, and Los Angeles fashion weeks.",
  },
  {
    icon: <FaCamera />,
    title: "Editorial Photography",
    desc: "Professional photoshoot for your portfolio, lookbooks, and press releases.",
  },
  {
    icon: <FaBullhorn />,
    title: "International PR",
    desc: "Extensive media coverage and public relations support across global channels.",
  },
  {
    icon: <FaHandshake />,
    title: "Elite Networking",
    desc: "Exclusive opportunities to connect with industry leaders and buyers.",
  },
  {
    icon: <FaLaptop />,
    title: "Digital Showcase",
    desc: "Online features for global buyers and fashion enthusiasts to view your work.",
  },
  {
    icon: <FaTrophy />,
    title: "Awards & Recognition",
    desc: "Chance to win 'Designer of the Year' and other prestigious accolades.",
  },
  {
    icon: <FaTools />,
    title: "Logistics Support",
    desc: "Assistance with fittings, backstage coordination, and show logistics.",
  },
  {
    icon: <FaPlane />,
    title: "Sponsored Travel",
    desc: "Accommodation and travel support included for all fashion week shows.",
  },
  {
    icon: <FaStar />,
    title: "Premium Add-ons",
    desc: "Optional model pairing, Show Opener/Stopper spots, and styling assistance.",
  },
];

export const DesignerCollective = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount = direction === "left" ? -480 : 480;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="designer-collective-page">
      <div className="dc-container">
        {/* --- Section 1: For Designers Header --- */}
        <div className="dc-header">
          <h1>For Designers</h1>
          <p>
            Showcase your talent globally and compete alongside international
            designers in the world's most prestigious fashion weeks.
          </p>
        </div>

        {/* --- Section 2: Events Grid --- */}
        <div className="dc-events-grid">
          {designerEvents.map((event, index) => (
            <div
              className="event-card"
              key={index}
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="event-overlay"></div>
              <div className="event-card-content">
                <div className="text-content">
                  <h3>{event.name}</h3>
                  <p className="event-details">
                    {event.date}
                    <br />
                    {event.location}
                  </p>
                </div>
                <a href={event.link} className="apply-button">
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* --- Section 3: NEW Showcase Package GRID --- */}
        <div className="dc-showcase-section">
          <div className="dc-section-header">
            <span className="subtitle"></span>
            <h2>Designer Global Showcase Package</h2>
            {/* <p>
              Showcase your talent globally with our all-inclusive support
              system designed to elevate your brand to new heights.
            </p> */}
          </div>

          {/* Grid Layout for Features */}
          <div className="showcase-grid">
            {showcaseFeatures.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="card-icon">{feature.icon}</div>
                <div className="card-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="contact-text">
            If you want to discuss possibilities of showcasing on our platform,
            email us at <br />
            <a href="mailto:royalrunway@gmail.com">royalrunway@gmail.com</a>
          </p>
        </div>

        {/* --- Section 4: Designer Global Showcase (SLIDER) --- */}
        <div className="dc-posters-section">
          <div className="dc-section-header">
            <h2>Designer Global Showcase</h2>
            <span className="subtitle">Official Event Posters</span>
          </div>

          <div className="poster-carousel-wrapper">
            <button className="nav-btn left" onClick={() => scroll("left")}>
              <FaChevronLeft />
            </button>

            <div className="posters-track" ref={sliderRef}>
              {showcasePosters.map((poster) => (
                <div key={poster.id} className="poster-card">
                  <img src={poster.src} alt={poster.title} />
                </div>
              ))}
            </div>

            <button className="nav-btn right" onClick={() => scroll("right")}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* --- Section 5: Featured Designers --- */}
        {/* <div className="dc-section-header">
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
        </div> */}

        {/* --- Section 6: Why Collaborate? --- */}
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

        {/* --- Section 7: Final CTA --- */}
        {/* <div className="dc-cta-section">
          <h2>Become a Part of the Movement</h2>
          <p>
            Are you ready to elevate your brand and share your vision with the
            world? We invite you to apply and join a collective that celebrates
            innovation and creativity.
          </p>
          <a href="#" className="cta-button">
            Apply to the Collective
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default DesignerCollective;
