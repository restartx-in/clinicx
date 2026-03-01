import "./style.css"; // Reuse the same CSS file

const ModelForm = () => (
  <div className="form-container">
    {/* Row 1: Full Name + Email */}
    <div className="form-grid">
      <div className="input-group">
        <label>Full Name</label>
        <input name="fullName" placeholder="Enter full name" required />
      </div>
      <div className="input-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="email@example.com"
          required
        />
      </div>
    </div>

    {/* Row 2: US Phone + Age */}
    <div className="form-grid">
      <div className="input-group">
        <label>US Phone</label>
        <input name="phone" placeholder="(555) 000-0000" />
      </div>
      <div className="input-group">
        <label>Age</label>
        <input name="age" placeholder="Years" />
      </div>
    </div>

    {/* Row 3: Gender + Location */}
    <div className="form-grid">
      <div className="input-group">
        <label>Gender</label>
        <select name="gender">
          <option value="" disabled selected>
            Select Gender
          </option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="non-binary">Non-Binary</option>
        </select>
      </div>
      <div className="input-group">
        <label>Location (State)</label>
        <select name="locationState">
          <option value="" disabled selected>
            Select State
          </option>
          <option value="NY">New York</option>
          <option value="CA">California</option>
          {/* Add other states as needed */}
        </select>
      </div>
    </div>

    {/* Row 4: Height + Ethnicity */}
    <div className="form-grid">
      <div className="input-group">
        <label>Height</label>
        <select name="height">
          <option value="" disabled selected>
            Select Height
          </option>
          <option value="5-8">5'8"</option>
          <option value="5-9">5'9"</option>
          <option value="5-10">5'10"</option>
          <option value="5-11">5'11"</option>
          <option value="6-0">6'0"+</option>
        </select>
      </div>
      <div className="input-group">
        <label>Select Your Ethnicity</label>
        <select name="ethnicity">
          <option value="" disabled selected>
            Select Ethnicity
          </option>
          <option value="asian">Asian</option>
          <option value="black">Black / African</option>
          <option value="hispanic">Hispanic / Latino</option>
          <option value="white">White / Caucasian</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>

    {/* Row 5: Portfolio + Instagram */}
    <div className="form-grid">
      <div className="input-group">
        <label>Add Portfolio Link (Walk & Compcard)</label>
        <input name="portfolio" placeholder="https://" />
      </div>
      <div className="input-group">
        <label>Instagram - URL / Link</label>
        <input name="instagram" placeholder="https://instagram.com/..." />
      </div>
    </div>

    {/* Row 6: Previous Selection (Full Width) */}
    <div className="input-group full-width">
      <label>Were you selected to walk for Runway 7 Fashion at NYFW?</label>
      <select name="previouslySelected">
        <option value="" disabled selected>
          Select Option
        </option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  </div>
);

export default ModelForm;
