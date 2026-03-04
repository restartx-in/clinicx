import React, { useState } from "react";
import "./style.css";

const KidsModelForm = () => {
  const [preview, setPreview] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const previews = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        previews.push(reader.result);

        if (previews.length === files.length) {
          setPreview(previews);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  // const showLocations = [
  //   "New York",
  //   "Boston",
  //   "Los Angeles (L.A)",
  //   "San Francisco",
  //   "Atlanta",
  //   "Dallas",
  //   "Austin",
  // ];

  return (
    <div className="kids-form-container">
      {/* Row 1: Name */}
      <div className="form-grid">
        <div className="input-group">
          <label>First Name</label>
          <input name="childFirstName" required />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input name="childLastName" required />
        </div>
      </div>

      {/* Contact */}
      <div className="form-grid">
        <div className="input-group">
          <label>Email</label>
          <input name="email" type="email" required />
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input name="phone" />
        </div>
      </div>
      {/* Upload Child Photo */}
      <div className="input-group full-width">
        <label>Upload Child Photo (Max 2MB)</label>
        <input
          type="file"
          name="portfolioImages"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </div>

      {preview.length > 0 && (
        <div className="image-preview">
          {preview.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Preview"
              style={{
                maxWidth: "150px",
                margin: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          ))}
        </div>
      )}

      {/* Gender + Parent */}
      <div className="form-grid">
        <div className="input-group">
          <label>Gender</label>
          <select name="gender" defaultValue="">
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="input-group">
          <label>Parent's Name</label>
          <input name="parentName" />
        </div>
      </div>

      {/* Appearance */}
      <div className="form-grid">
        <div className="input-group">
          <label>Eye Color</label>
          <input name="eyeColor" />
        </div>
        <div className="input-group">
          <label>Hair Color</label>
          <input name="hairColor" />
        </div>
      </div>

      {/* Size */}
      <div className="form-grid">
        <div className="input-group">
          <label>Age</label>
          <input name="age" />
        </div>
        <div className="input-group">
          <label>T-Shirt / Dress Size</label>
          <input name="tShirtSize" />
        </div>
      </div>

      {/* Stats */}
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

      {/* Experience + State */}
      <div className="form-grid">
        <div className="input-group">
          <label>Runway Experience?</label>
          <select name="hasExperience" defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="input-group">
          <label>City / State of Residence</label>
          <input name="locationState" />
        </div>
      </div>

      {/* Applying Show (Checkbox Multi-select) */}
      {/* <div className="input-group full-width">
        <label className="section-label">
          Which shows are you applying for?
        </label>

        <div className="checkbox-stack">
          {showLocations.map((city) => (
            <label key={city} className="check-container">
              {city}
              <input type="checkbox" name="interestedCity" value={city} />
              <span className="boxmark"></span>
            </label>
          ))}
        </div>
      </div> */}

      {/* Previously Selected */}
      <div className="input-group full-width">
        <label>Were you selected previously?</label>

        <div className="radio-horizontal">
          <label className="radio-container">
            Yes
            <input type="radio" name="previouslySelected" value="Yes" />
          </label>

          <label className="radio-container">
            No
            <input type="radio" name="previouslySelected" value="No" />
          </label>
        </div>
      </div>

      {/* Referral + Agency */}
      <div className="form-grid">
        <div className="input-group">
          <label>How did you hear about us?</label>
          <select name="howDidYouHear" defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option value="Instagram">Instagram</option>
            <option value="Google">Google</option>
            <option value="Friend / Family">Friend / Family</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="input-group">
          <label>Agency Name</label>
          <input name="representation" />
        </div>
      </div>
    </div>
  );
};

export default KidsModelForm;
