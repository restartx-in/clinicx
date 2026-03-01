import React from "react";
import "./style.css";

const KidsModelForm = () => {
  const showLocations = [
    "New York",
    "Boston",
    "Los Angeles (L.A)",
    "San Francisco",
    "Atlanta",
    "Dallas",
    "Austin",
  ];

  return (
    <div className="kids-form-container">
      {/* Row 1: Name */}
      <div className="form-grid">
        <div className="input-group">
          <label>First Name</label>
          <input name="firstName" required />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input name="lastName" required />
        </div>
      </div>

      {/* Row 2: Contact */}
      <div className="form-grid">
        <div className="input-group">
          <label>Email *</label>
          <input name="email" type="email" required />
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input name="phone" />
        </div>
      </div>

      {/* Row 3: Identity */}
      <div className="form-grid">
        <div className="input-group">
          <label>Gender</label>
          <select name="gender" defaultValue="">
            <option value="" disabled></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-group">
          <label>Parents Name</label>
          <input name="parentsName" />
        </div>
      </div>

      {/* Row 4: Appearance */}
      <div className="form-grid">
        <div className="input-group">
          <label>Eye Colour</label>
          <input name="eyeColour" />
        </div>
        <div className="input-group">
          <label>Hair Colour</label>
          <input name="hairColour" />
        </div>
      </div>

      {/* Row 5: Size */}
      <div className="form-grid">
        <div className="input-group">
          <label>Age</label>
          <input name="age" />
        </div>
        <div className="input-group">
          <label>Dress Size</label>
          <input name="dressSize" />
        </div>
      </div>

      {/* Row 6: Stats */}
      <div className="form-grid">
        <div className="input-group">
          <label>Race / Ethnicity</label>
          <input name="ethnicity" />
        </div>
        <div className="input-group">
          <label>Height (Feet / Inches)</label>
          <input name="height" />
        </div>
      </div>

      {/* Row 7: Residence */}
      <div className="form-grid">
        <div className="input-group">
          <label>Years of Runway Experience</label>
          <input name="experience" />
        </div>
        <div className="input-group">
          <label>City / State of Residence</label>
          <input name="residence" />
        </div>
      </div>

      {/* Checkboxes: Show Selection */}
      <div className="input-group full-width">
        <label className="section-label">
          Which of the following shows are you applying? *
        </label>
        <div className="checkbox-stack">
          {showLocations.map((city) => (
            <label key={city} className="check-container">
              {city}
              <input type="checkbox" name="applyingShow" value={city} />
              <span className="boxmark"></span>
            </label>
          ))}
        </div>
      </div>

      {/* Radio: Catalog Shoots */}
      <div className="input-group full-width">
        <label className="section-label">
          Would you like to be included in designers catalog shoots after the
          show (Optional)
        </label>
        <div className="radio-horizontal">
          <label className="radio-container">
            YES <input type="radio" name="catalogShoot" value="Yes" />
            <span className="checkmark"></span>
          </label>
          <label className="radio-container">
            NO <input type="radio" name="catalogShoot" value="No" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>

      {/* Row 8: Referral */}
      <div className="form-grid">
        <div className="input-group">
          <label>How did you hear about us?</label>
          <select name="referral" defaultValue="">
            <option value="" disabled></option>
            <option value="instagram">Instagram</option>
            <option value="google">Google</option>
            <option value="friend">Friend / Family</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-group">
          <label>Agency's Name</label>
          <input name="agencyName" />
        </div>
      </div>
    </div>
  );
};

export default KidsModelForm;
