import React from "react";
import { Link } from "react-router-dom";
import { PageRoute } from "@/constants/types";
import {
  Check,
  Calendar,
  Camera,
  UserCheck,
  Star,
  ArrowLeft,
  Award,
  Users,
  Zap,
} from "lucide-react";
import "./RunwayAcademy.scss";

export const RunwayAcademy = () => {
  const schedule = [
    {
      day: "Day 1",
      title: "Introduction & Grooming",
      items: [
        "Model industry basics",
        "Posture, body alignment",
        "Skin care, hair care",
        "Etiquette & self-presentation",
        "Confidence & mindset training",
      ],
    },
    {
      day: "Day 2",
      title: "Runway Techniques",
      items: [
        "Catwalk fundamentals",
        "Signature walk creation",
        "Turns, poses, stage presence",
        "Heel walking practice",
        "Group formation walk training",
      ],
    },
    {
      day: "Day 3",
      title: "Grooming & Runway (Athul Suresh)",
      items: [
        "Ramp Walk fundamentals",
        "Grooming",
        "Walking practice, choreography",
        "Group formation walk training",
      ],
    },
    {
      day: "Day 4",
      title: "Camera Training",
      items: [
        "Facial expressions (soft, fierce, editorial)",
        "Posing for photos/videos",
        "Reels practice & transitions",
        "Outfit styling guidance",
      ],
    },
    {
      day: "Day 5",
      title: "Pageant & Interview Skills",
      items: [
        "Q&A practice",
        "Communication skills",
        "Mock interviews",
        "Stage introduction practice",
      ],
    },
    {
      day: "Day 6",
      title: "Professional Photoshoot",
      items: [
        "2 outfit photoshoot",
        "Individual walk video",
        "Portfolio starter kit (6–10 edited pics)",
        "Certificate distribution",
        "Feedback & mentorship session",
      ],
    },
  ];

  return (
    <div className="workshop-page">
      {/* Header */}
     

      {/* Hero */}
      <div className="workshop-hero">
        <div className="hero-grid">
          <div className="hero-content">
            
            <div className="live-badge">
              <span className="pulse-dot"></span>
              <span>Registration Open</span>
            </div>

            <h1>
              {/* 6-Day Comprehensive <br /> */}
              <span className="highlight">Model Training Workshop</span>
            </h1>
            <p>
              Step into the world of fashion with confidence and style! This
             workshop is designed for aspiring models looking
              to master the art of runway walking, posing, grooming, and
              portfolio development.
            </p>
            <p className="hero-subtext">
              Under the guidance of 2 expert trainers from{" "}
              <strong>RunWay Academy</strong>, participants will receive
              hands-on training, personalized feedback, and professional
              photoshoot experience to shine in the competitive modeling
              industry.
            </p>

            <div className="cta-group">
              <Link to={PageRoute.CONTACT} className="btn-primary">
                Reserve Your Spot
              </Link>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="inner-wrapper">
              <img
                src="https://www.fima.co/wp-content/uploads/2018/06/559506775-825x510.jpg"
                alt="Model Training"
              />
              <div className="gradient-overlay"></div>
              <div className="image-caption">
                {/* <p>Featuring Athul Suresh</p> */}
                {/* <p>Athul's Academy</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Package Highlights Section */}
      <div className="package-section">
        <div className="package-container">
          <h2 className="section-title">Workshop Package Includes</h2>
          <div className="package-grid">
            <div className="pkg-card">
              <Users className="icon" />
              <h3>Expert Guidance</h3>
              <p>
                Training by Athul Suresh and 2 experienced industry
                professionals from Athul’s Academy.
              </p>
            </div>
            <div className="pkg-card">
              <Camera className="icon" />
              <h3>Professional Photoshoot</h3>
              <p>Capture your best looks on Day 6 with a professional team.</p>
            </div>
            <div className="pkg-card">
              <Award className="icon" />
              <h3>Certification</h3>
              <p>
                Kickstart your modeling portfolio with a certificate and starter
                kit.
              </p>
            </div>
            <div className="pkg-card">
              <Zap className="icon" />
              <h3>Hands-On Training</h3>
              <p>Practical runway walking, posing, and grooming sessions.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="schedule-section">
        <h2>Day-wise Curriculum</h2>
        <div className="timeline">
          {schedule.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="dot"></div>
              <div className="content-row">
                <span className="time-label">{item.day}</span>
                <div className="description">
                  <h3>{item.title}</h3>
                  <ul className="curriculum-list">
                    {item.items.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opportunity Section */}
      <div className="opportunity-banner">
        <Star className="banner-icon" />
        <div className="banner-text">
          <h3>Step into the Spotlight!</h3>
          <p>
            All participants will grace the runway at{" "}
            <strong>Royal Runway Fashion Show Season 2</strong> on May 2nd &
            3rd.
          </p>
          <p className="banner-highlight">
            🏆 One exceptional winner will be selected and receive a full
            sponsorship to represent at the International Pageant Competition in
            August 2026—an unforgettable opportunity to shine on the global
            stage!
          </p>
        </div>
      </div>
      <div className="details-bar">
        <div className="details-grid">
          <div className="detail-item group">
            <UserCheck className="icon" />
            <h3>Trainers</h3>
            <p className="main-text">Athul Suresh</p>
            <p className="sub-text">& Industry Experts</p>
          </div>
          <div className="detail-item group">
            <Calendar className="icon" />
            <h3>Duration</h3>
            <p className="main-text">6 Days</p>
            <p className="sub-text">5 Hours per Day</p>
          </div>
          <div className="detail-item group">
            <Star className="icon" />
            <h3>Bonus</h3>
            <p className="main-text">Industry Insights</p>
            <p className="sub-text">Guest Speaker Session</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RunwayAcademy;