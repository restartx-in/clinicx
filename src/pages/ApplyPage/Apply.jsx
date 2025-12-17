import React, { useState, useRef } from 'react';
import { Mail, ArrowRight, CheckCircle, Info, Crown } from 'lucide-react';
import './Apply.scss';

export const Apply = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const formRef = useRef(null);

  // PASTE YOUR GOOGLE FORM ACTION URL HERE
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf05YfojW20Wnn8aUfcVNbJAtGWeK54TMpY6yxcJkjoI_fogA/formResponse";

  // PASTE YOUR GOOGLE ENTRY IDs HERE  
  const FORM_MAPPING = {
    interest:   "entry.667555457",
    event:      "entry.YOUR_EVENT_ID_HERE", // <--- REPLACE WITH YOUR GOOGLE ENTRY ID FOR EVENT
    firstName:  "entry.1775935934",
    lastName:   "entry.904463290",
    email:      "entry.1915678508",
    phone:      "entry.868470487",
    height:     "entry.1623945414",
    bust:       "entry.597987699",
    waist:      "entry.165983740",
    hips:       "entry.2025761249",
    message:    "entry.1083009582",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(formRef.current);
    const googleData = new FormData();

    Object.keys(FORM_MAPPING).forEach(key => {
        if (FORM_MAPPING[key] !== "entry.YOUR_EVENT_ID_HERE") {
             googleData.append(FORM_MAPPING[key], formData.get(key) || '');
        }
    });

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", 
        body: googleData
      });
      setFormStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
      setFormStatus('idle');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        <div className="page-header">
          <h1>Contact / Register</h1>
          <p>Start your Royal Runway journey. Apply for workshops or runway shows.</p>
        </div>

        <div className="application-form-box">
            <div className="accent-line"></div>

            {formStatus === 'success' ? (
              <div className="success-message">
                <div className="icon-wrapper"><CheckCircle /></div>
                <h3>Application Received</h3>
                <p>Our team will review your submission.</p>
                <button onClick={() => setFormStatus('idle')}>Submit Another</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                
                <div className="selection-group">
                    <label className="group-label">I am interested in</label>
                    <div className="radio-options">
                      <label className="radio-label">
                        <input type="radio" name="interest" value="6-Day Workshop" defaultChecked />
                        <div className="option-box"><span>6-Day Workshop</span></div>
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="interest" value="Fashion Show Season 2" />
                        <div className="option-box"><span>Fashion Show Season 2</span></div>
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="interest" value="Luxury Package" />
                        <div className="option-box"><span>Luxury Package Info</span></div>
                      </label>
                    </div>
                </div>

                {/* Event Select Field - Updated class for horizontal layout */}
                <div className="input-group horizontal-select">
                    <label>Select Event Location</label>
                    <div className="select-wrapper">
                      <select name="event" required defaultValue="">
                          <option value="" disabled hidden>Choose location...</option>
                          <option value="New York">New York</option>
                          <option value="Cannes">Cannes</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Los Angeles">Los Angeles</option>
                      </select>
                    </div>
                </div>

                <div>
                    <h3 className="section-title">Personal Details</h3>
                    <div className="form-grid">
                      <div className="input-group">
                          <label>First Name</label>
                          <input type="text" name="firstName" required />
                      </div>
                      <div className="input-group">
                          <label>Last Name</label>
                          <input type="text" name="lastName" required />
                      </div>
                    </div>
                    <div className="form-grid" style={{ marginTop: '2rem' }}>
                      <div className="input-group">
                          <label>Email Address</label>
                          <input type="email" name="email" required />
                      </div>
                      <div className="input-group">
                          <label>Phone</label>
                          <input type="tel" name="phone" placeholder="+1 (000) 000-0000" />
                      </div>
                    </div>
                </div>

                <div>
                    <div className="section-title">
                        <h3>Measurements</h3>
                        <span className="optional-text">Optional for Inquiries</span>
                    </div>
                    <div className="stats-grid">
                        <input type="text" name="height" placeholder="Height" />
                        <input type="text" name="bust" placeholder="Bust" />
                        <input type="text" name="waist" placeholder="Waist" />
                        <input type="text" name="hips" placeholder="Hips" />
                    </div>
                </div>

                <div className="textarea-group">
                    <label>Message / Social Handles</label>
                    <textarea name="message" rows={3} placeholder="Tell us about your experience..."></textarea>
                </div>

                <button type="submit" disabled={formStatus === 'submitting'} className="submit-btn">
                    <span>{formStatus === 'submitting' ? 'Processing...' : 'Submit Application'}</span>
                    {!formStatus === 'submitting' && <ArrowRight className="arrow-icon" />}
                </button>
              </form>
            )}
        </div>
        
        <div className="contact-footer">
            <h4>Royal Runway Inquiries</h4>
            <div className="footer-details">
                <span><Mail /> info@royalrunway.com</span>
                <span><Crown /> Season 2: May 2nd & 3rd</span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Apply;