import React from "react";
import "./style.css";

const DesignerForm = () => (
  <div className="designer-form-container">
    {/* --- SECTION: PERSONAL INFO --- */}
    <div className="form-grid">
      <div className="input-group">
        <label>First Name</label>
        <input name="firstName" placeholder="Enter first name" required />
      </div>
      <div className="input-group">
        <label>Last Name</label>
        <input name="lastName" placeholder="Enter last name" required />
      </div>
    </div>

    <div className="form-grid">
      <div className="input-group">
        <label>Phone Number</label>
        <input name="phone" placeholder="Include country code" required />
      </div>
      <div className="input-group">
        <label>Country</label>
        <input name="country" placeholder="Select country" required />
      </div>
    </div>

    <div className="input-group full-width">
      <label>Email</label>
      <input
        name="email"
        type="email"
        placeholder="Enter email address"
        required
      />
    </div>

    {/* --- SECTION: PROFESSIONAL INFO --- */}
    <div className="form-grid">
      <div className="input-group">
        <label>Company Name</label>
        <input name="companyName" placeholder="Your brand name" />
      </div>
      <div className="input-group">
        <label>Are You A Model?</label>
        <div className="radio-horizontal">
          <label className="radio-container">
            YES <input type="radio" name="areYouModel" value="Yes" />
            <span className="checkmark"></span>
          </label>
          <label className="radio-container">
            NO <input type="radio" name="areYouModel" value="No" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>

    <div className="form-grid">
      <div className="input-group">
        <label>Website URL</label>
        <input name="website" placeholder="https://" />
      </div>
      <div className="input-group">
        <label>Instagram</label>
        <input name="instagram" placeholder="@handle" />
      </div>
    </div>

    {/* --- NEW SECTION: SHOW HISTORY (From Image 2) --- */}
    <div className="input-group full-width">
      <label>How Many Shows Have You Participated In The Past?</label>
      <div className="radio-stack">
        {["0", "1", "2", "3", "4", "5+"].map((val) => (
          <label key={val} className="radio-container">
            {val}
            <input type="radio" name="pastShows" value={val} />
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
    </div>

    {/* --- SECTION: PRODUCTION --- */}
    <div className="input-group full-width">
      <label>How Many Designs Do You Have Created and Ready Today?</label>
      <div className="radio-stack">
        {["Under 10", "Under 25", "Over 25"].map((val) => (
          <label key={val} className="radio-container">
            {val}
            <input type="radio" name="designCount" value={val} />
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
    </div>

    {/* --- NEW SECTION: EVENTS (From Image 2) --- */}
    <div className="input-group full-width">
      <label>Event Interested In</label>
      <div className="checkbox-stack">
        <label className="check-container">
          NEW YORK – Sony Hall – Sept 8-13, 2026
          <input type="checkbox" name="eventInterested" value="Sept 2026" />
          <span className="boxmark"></span>
        </label>
        <label className="check-container">
          NEW YORK – Sony Hall – February, 2027
          <input type="checkbox" name="eventInterested" value="Feb 2027" />
          <span className="boxmark"></span>
        </label>
      </div>
    </div>

    {/* --- SECTION: CATEGORIES --- */}
    <div className="input-group full-width">
      <label>Retail Category</label>
      <div className="checkbox-grid">
        {[
          "Athleisure",
          "Accessories",
          "Bridal",
          "Eveningwear/Gowns",
          "Kids/Youth",
          "Lingerie",
          "Streetwear",
          "Suits",
          "Other",
        ].map((category) => (
          <label key={category} className="check-container">
            {category}
            <input type="checkbox" name="retailCategory" value={category} />
            <span className="boxmark"></span>
          </label>
        ))}
      </div>
    </div>

    {/* --- LOGISTICS & SOURCE --- */}
    <div className="form-grid">
      <div className="input-group">
        <label>Budget Expectations</label>
        <select name="budget">
          <option value="">Select range...</option>
          <option value="5k-10k">$5,000 to $10,000</option>
          <option value="10k-20k">$10,000 to $20,000</option>
          <option value="20k+">$20,000+</option>
        </select>
      </div>
      <div className="input-group">
        <label>I Prefer To Be Contacted By Phone At</label>
        <select name="contactTime">
          <option value="9am">9am</option>
          <option value="12pm">12pm</option>
          <option value="3pm">3pm</option>
          <option value="6pm">6pm</option>
        </select>
      </div>
    </div>

    <div className="input-group full-width">
      <label>On Which Platform Did You Find This Form?</label>
      <div className="radio-stack">
        {[
          "Runway 7 Website",
          "FWO Website",
          "Instagram",
          "Google",
          "Other",
        ].map((p) => (
          <label key={p} className="radio-container">
            {p}
            <input type="radio" name="sourcePlatform" value={p} />
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
    </div>
  </div>
);

export default DesignerForm;
