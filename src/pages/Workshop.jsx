import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '@/constants/types';
import { Check, Clock, Globe, Calendar, ArrowLeft, Wifi, MonitorPlay } from 'lucide-react';
import './Workshop.scss';

export const Workshop = () => {
  // Updated schedule for Online context
  const schedule = [
    { time: "10:00 AM", title: "Digital Presence & Branding", desc: "Optimizing your social media algorithms and digital portfolio setup." },
    { time: "11:30 AM", title: "Virtual Casting Techniques", desc: "Mastering the 'Self-Tape'. Lighting, angles, and slate introduction at home." },
    { time: "01:00 PM", title: "Lunch Break", desc: "Offline break." },
    { time: "02:00 PM", title: "Remote Posing Workshop", desc: "Live guided posing session via webcam with real-time feedback." },
    { time: "04:00 PM", title: "Q&A with Agents", desc: "Open floor discussion with booking agents from NY and Paris." },
  ];

  return (
    <div className="workshop-page">
      
      {/* Header */}
      <div className="workshop-header">
        <Link to={PageRoute.PORTFOLIO} className="back-link">
          <ArrowLeft className="icon" /> Back to Programs
        </Link>
      </div>

      {/* Hero */}
      <div className="workshop-hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="live-badge">
               <span className="pulse-dot"></span>
               <span>Live Stream Event</span>
            </div>
            
            <h1>
              Day Online <br/><span className="highlight">Workshop</span>
            </h1>
            <p>
              Join our intensive one-day virtual masterclass. Learn industry secrets, perfect your digital casting, and connect with agents from the comfort of your home.
            </p>
            <div className="cta-group">
              <Link 
                to={PageRoute.CONTACT}
                className="btn-primary"
              >
                Register Now
              </Link>
              <div className="btn-secondary">
                <Wifi className="icon" />
                <span>Global Access</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="inner-wrapper">
               <img 
                 src="https://www.fima.co/wp-content/uploads/2018/06/559506775-825x510.jpg" 
                 alt="Online Workshop" 
               />
               <div className="gradient-overlay"></div>
               <div className="image-caption">
                 <p>Interactive Training</p>
                 <p>Zoom & Google Meet Integration</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Bar */}
      <div className="details-bar">
        <div className="details-grid">
          <div className="detail-item group">
            <MonitorPlay className="icon" />
            <h3>Platform</h3>
            <p className="main-text">Zoom Live Stream</p>
            <p className="sub-text">Link sent upon registration</p>
          </div>
          <div className="detail-item group">
            <Calendar className="icon" />
            <h3>Next Date</h3>
            <p className="main-text">Saturday, Nov 18</p>
            <p className="sub-text">10:00 AM EST</p>
          </div>
          <div className="detail-item group">
            <Globe className="icon" />
            <h3>Investment</h3>
            <p className="main-text">$150.00 USD</p>
            <p className="sub-text">Includes recording access</p>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="schedule-section">
        <h2>Session Schedule</h2>
        <div className="timeline">
          {schedule.map((item, index) => (
            <div key={index} className="timeline-item">
              {/* Timeline Dot */}
              <div className="dot"></div>
              
              <div className="content-row">
                <span className="time-label">{item.time}</span>
                <div className="description">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};