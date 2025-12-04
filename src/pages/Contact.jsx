import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Info } from 'lucide-react';
import './Contact.scss';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Header */}
        <div className="page-header">
          <h1>Contact / Register</h1>
          <p>
            Start your journey with Lumina. Fill out the form below to register for workshops or apply for representation.
          </p>
        </div>

        {/* Application Form Container */}
        <div className="application-form-box">
            {/* Decorative accent */}
            <div className="accent-line"></div>

            {formStatus === 'success' ? (
              <div className="success-message">
                <div className="icon-wrapper">
                  <CheckCircle />
                </div>
                <h3>Application Received</h3>
                <p>
                  Our team will review your submission and contact you within 48 hours with next steps.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Selection Type */}
                <div className="selection-group">
                    <label className="group-label">I am interested in</label>
                    <div className="radio-options">
                      <label className="radio-label">
                        <input type="radio" name="type" defaultChecked />
                        <div className="option-box">
                          <span>Online Workshop</span>
                        </div>
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="type" />
                        <div className="option-box">
                          <span>Agency Representation</span>
                        </div>
                      </label>
                    </div>
                </div>

                {/* Personal Details */}
                <div>
                    <h3 className="section-title">Personal Details</h3>
                    <div className="form-grid">
                      <div className="input-group">
                          <label>First Name</label>
                          <input type="text" required placeholder="JANE" />
                      </div>
                      <div className="input-group">
                          <label>Last Name</label>
                          <input type="text" required placeholder="DOE" />
                      </div>
                    </div>
                    <div className="form-grid" style={{ marginTop: '2rem' }}>
                      <div className="input-group">
                          <label>Email Address</label>
                          <input type="email" required placeholder="EMAIL@EXAMPLE.COM" />
                      </div>
                      <div className="input-group">
                          <label>Phone</label>
                          <input type="tel" placeholder="+1 (000) 000-0000" />
                      </div>
                    </div>
                </div>

                {/* Stats (Optional) */}
                <div>
                    <div className="section-title">
                        <h3>Measurements</h3>
                        <span className="optional-text">Optional for Workshop</span>
                    </div>
                    <div className="stats-grid">
                        <input type="text" placeholder="Height" />
                        <input type="text" placeholder="Bust/Chest" />
                        <input type="text" placeholder="Waist" />
                        <input type="text" placeholder="Hips" />
                    </div>
                </div>

                {/* Message */}
                <div className="textarea-group">
                    <label>Message / Social Handles</label>
                    <textarea rows={3} placeholder="Tell us about your experience or paste your Instagram link..."></textarea>
                </div>

                <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="submit-btn"
                >
                    <span>{formStatus === 'submitting' ? 'Processing...' : 'Submit Application'}</span>
                    {!formStatus === 'submitting' && <ArrowRight className="arrow-icon" />}
                </button>
              </form>
            )}
        </div>
        
        {/* Quick Contact Footer */}
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