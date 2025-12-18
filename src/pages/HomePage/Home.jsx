import React from "react";
import { Link } from "react-router-dom";
import { PageRoute } from "@/constants/types";
import { ArrowRight } from "lucide-react";
import "./Home.scss";

// Updated Data with Topic-Matching Professional Images
const categoryCards = [
  {
    id: "designer",
    title: "Designer Collective",
    subtitle:
      "Showcasing the avant-garde collections of world-renowned fashion brands.",
    // Image: High-fashion garment/texture focus (Design)
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2670&auto=format&fit=crop",
    link: PageRoute.DESIGNER_COLLECTIVE,
  },
  {
    id: "models",
    title: "Global Models",
    subtitle:
      "Representing diverse, elite talent on the world’s most prestigious stages.",
    // Image: Group of models (Runway Finale / Collective)
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2670&auto=format&fit=crop",
    link: PageRoute.GLOBAL_MODELS,
  },
  {
    id: "academy",
    title: "Runway Academy",
    subtitle:
      "Intensive training to master the catwalk, poise, and professional grooming.",
    // Image: Distinct Catwalk/Ramp Walk action shot
    image:
      "https://images.unsplash.com/photo-1762430790694-aedd36b4cb8c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: PageRoute.RUNWAY_ACADEMY,
  },
  {
    id: "gallery",
    title: "Gallery",
    subtitle:
      "Relive the magic. Highlights, behind-the-scenes, and showstopping moments.",
    // Image: Atmospheric shot of stage lights/audience (Experience)
    image:
      "https://static01.nyt.com/images/2025/10/13/lens/13ST-FAVORITE-FW-LOOKS-top/13ST-FAVORITE-FW-LOOKS-top-superJumbo.jpg?quality=75&auto=webp",
    link: PageRoute.GALLERY || "#",
  },
];

export const Home = () => {
  return (
    <div className="programs-page">
      <div className="programs-container">
        {/* Header Section */}
        <div className="programs-header">
          <span className="subtitle ">
            where global fashion Meets opportunity
          </span>
          <h1>Fashion Show Production</h1>
          <p>
            Explore our comprehensive services for designers, models, and
            aspiring talents. From curating and producing fashion shows on
            global stages to intensive model training and runway academy
            programs, we bring your fashion vision to life.
          </p>
        </div>
      </div>

      {/* New 2x2 Category Grid - MOVED OUTSIDE CONTAINER FOR FULL WIDTH */}
      <div className="home-categories-grid">
        {categoryCards.map((card) => (
          <div key={card.id} className="category-card">
            {/* Background Image */}
            <div className="card-bg">
              <img src={card.image} alt={card.title} />
            </div>

            {/* Overlay Content */}
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.subtitle}</p>

              <Link to={card.link} className="action-btn">
                <span>See More</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Services Section Moved from About Page */}
      <section className="services-section">
        <div className="services-label">
          <h3>SERVICES OFFERED</h3>
        </div>
        <div className="services-container">
          <div className="services-list">
            <Link
              to={`${PageRoute.EVENTSPRODUCTION}#workshops`}
              className="service-item"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                cursor: "pointer",
              }}
            >
              <span className="service-category">WORKSHOPS</span>
              <h2>Mastering the Runway</h2>
              <span className="service-sub">
                KEY COMPONENTS OF OUR TRAINING
              </span>
              <p>
                Our training sessions are designed to equip aspiring models with
                the essential skills needed for success. Participants engage in
                practical exercises and receive personalized feedback, ensuring
                they develop confidence and grace on the runway, preparing them
                for the competitive fashion industry.
              </p>
            </Link>
            <Link
              to={`${PageRoute.EVENTSPRODUCTION}#workshops`}
              className="service-item"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                cursor: "pointer",
              }}
            >
              <span className="service-category">TRAINING</span>
              <h2>Workshops</h2>
              <span className="service-sub">
                COMPREHENSIVE LEARNING EXPERIENCES
              </span>
              <p>
                Ramp walk coaching focuses on refining posture, stride, and
                overall presence. Through intensive practice and expert
                guidance, models learn to exude elegance and poise, making a
                lasting impression during fashion shows and events, essential
                for their professional development.
              </p>
            </Link>
            <Link
              to={`${PageRoute.EVENTSPRODUCTION}#workshops`}
              className="service-item"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                cursor: "pointer",
              }}
            >
              <span className="service-category">RAMP WALKS</span>
              <h2>Special Events</h2>
              <span className="service-sub">
                UNIQUE OPPORTUNITIES FOR NETWORKING AND SKILL ENHANCEMENT
              </span>
              <p>
                Our workshops provide hands-on experience in various aspects of
                modeling. From styling tips to makeup application, participants
                gain valuable insights from industry professionals, enhancing
                their skills and boosting their confidence.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* "The Royal Runway Experience" Section - MOVED FROM ABOUT PAGE */}
      {/* <div className="home-experience-section">
        <div className="experience-info">
          <h2>The Royal Runway Experience</h2>
          <p>
            We specialize in organizing high-impact events and full-scale
            fashion show production. Our mission is to provide a platform where
            aspiring models can shine on an international scale.
          </p>
          <p>
            From local luxury runways to international stages, we curate
            experiences that blend high fashion with professional development.
          </p>
          <p style={{ fontWeight: "bold", color: "var(--lumina-bg-darker)" }}>
            Calling the bold, the fierce, and the absolutely unstoppable. Walk
            the global runway with elite designers and take part in our luxury
            model experience.
          </p>

          <div className="experience-stats">
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

        <div className="experience-visual">
          <img
            src="https://img2.wallspic.com/previews/0/4/0/5/6/165040/165040-gigi_hadid-model-celebrity-hair-glasses-550x310.jpg"
            alt="Backstage"
            className="experience-img"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
