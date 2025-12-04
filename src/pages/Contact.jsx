import React, { useState, useRef } from 'react';
import { Mail, ArrowRight, CheckCircle, Info } from 'lucide-react';
import './Contact.scss';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const formRef = useRef(null);

  // PASTE YOUR GOOGLE FORM ACTION URL HERE
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf05YfojW20Wnn8aUfcVNbJAtGWeK54TMpY6yxcJkjoI_fogA/formResponse";

  // PASTE YOUR GOOGLE ENTRY IDs HERE  
  const FORM_MAPPING = {
    interest:   "entry.667555457", // ID for "I am interested in"
    firstName:  "entry.1775935934", // ID for First Name
    lastName:   "entry.904463290", // ID for Last Name
    email:      "entry.1915678508", // ID for Email
    phone:      "entry.868470487", // ID for Phone
    height:     "entry.1623945414", // ID for Height
    bust:       "entry.597987699", // ID for Bust
    waist:      "entry.165983740", // ID for Waist
    hips:       "entry.2025761249", // ID for Hips
    message:    "entry.1083009582", // ID for Message
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(formRef.current);
    
    // Create a generic FormData object to send to Google
    const googleData = new FormData();

    // Map the React form names to the Google Entry IDs
    googleData.append(FORM_MAPPING.interest, formData.get('type'));
    googleData.append(FORM_MAPPING.firstName, formData.get('firstName'));
    googleData.append(FORM_MAPPING.lastName, formData.get('lastName'));
    googleData.append(FORM_MAPPING.email, formData.get('email'));
    googleData.append(FORM_MAPPING.phone, formData.get('phone'));
    
    // Measurements
    googleData.append(FORM_MAPPING.height, formData.get('height'));
    googleData.append(FORM_MAPPING.bust, formData.get('bust'));
    googleData.append(FORM_MAPPING.waist, formData.get('waist'));
    googleData.append(FORM_MAPPING.hips, formData.get('hips'));
    
    // Message
    googleData.append(FORM_MAPPING.message, formData.get('message'));

    try {
      // mode: 'no-cors' is CRITICAL here. 
      // It allows us to send data to Google without getting blocked by browser security.
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", 
        body: googleData
      });

      // Since 'no-cors' doesn't return a real status, we assume success if no error is thrown
      setFormStatus('success');
      formRef.current.reset(); // Clear the form
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
          <p>Start your journey with Lumina. Fill out the form below.</p>
        </div>

        <div className="application-form-box">
            <div className="accent-line"></div>

            {formStatus === 'success' ? (
              <div className="success-message">
                <div className="icon-wrapper"><CheckCircle /></div>
                <h3>Application Received</h3>
                <p>Our team will review your submission via Google Forms.</p>
                <button onClick={() => setFormStatus('idle')}>Submit Another</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                
                <div className="selection-group">
                    <label className="group-label">I am interested in</label>
                    <div className="radio-options">
                      <label className="radio-label">
                        <input type="radio" name="type" value="Online Workshop" defaultChecked />
                        <div className="option-box"><span>Online Workshop</span></div>
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="type" value="Agency Representation" />
                        <div className="option-box"><span>Agency Representation</span></div>
                      </label>
                    </div>
                </div>

                <div>
                    <h3 className="section-title">Personal Details</h3>
                    <div className="form-grid">
                      <div className="input-group">
                          <label>First Name</label>
                          <input type="text" name="firstName" required placeholder="JANE" />
                      </div>
                      <div className="input-group">
                          <label>Last Name</label>
                          <input type="text" name="lastName" required placeholder="DOE" />
                      </div>
                    </div>
                    <div className="form-grid" style={{ marginTop: '2rem' }}>
                      <div className="input-group">
                          <label>Email Address</label>
                          <input type="email" name="email" required placeholder="EMAIL@EXAMPLE.COM" />
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
                        <span className="optional-text">Optional for Workshop</span>
                    </div>
                    <div className="stats-grid">
                        <input type="text" name="height" placeholder="Height" />
                        <input type="text" name="bust" placeholder="Bust/Chest" />
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
            <h4>General Inquiries</h4>
            <div className="footer-details">
                <span><Mail /> info@lumina.agency</span>
                <span><Info /> +1 (212) 555-0199</span>
            </div>
        </div>
      </div>
    </div>
  );
};