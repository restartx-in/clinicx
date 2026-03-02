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
        <select name="gender" defaultValue="">
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Non-Binary">Non-Binary</option>
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
        <select name="height" defaultValue="">
          <option value="" disabled>
            Select Height
          </option>
          <option value={`5'8"`}>5'8"</option>
          <option value={`5'9"`}>5'9"</option>
          <option value={`5'10"`}>5'10"</option>
          <option value={`5'11"`}>5'11"</option>
          <option value={`6'0"+`}>6'0"+</option>
        </select>
      </div>
      <div className="input-group">
        <label>Select Your Ethnicity</label>
        <select name="ethnicity" defaultValue="">
          <option value="" disabled>
            Select Ethnicity
          </option>
          <option value="Asian">Asian</option>
          <option value="Black / African">Black / African</option>
          <option value="Hispanic / Latino">Hispanic / Latino</option>
          <option value="White / Caucasian">White / Caucasian</option>
          <option value="Other">Other</option>
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
      <select name="previouslySelected" defaultValue="">
        <option value="" disabled>
          Select Option
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  </div>
);

export default ModelForm;
