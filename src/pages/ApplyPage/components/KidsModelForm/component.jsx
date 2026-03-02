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
      <section className="audition-section">
        {/* MAIN HEADING */}
        <h1 className="main-heading">The Audition</h1>

        {/* PARAGRAPH */}
        <p>
          We believe that every child is unique and has their own special
          qualities to bring to the runway. Our goal is to showcase a diverse
          range of children's fashion styles, so we encourage children of all
          backgrounds and abilities to apply. We look forward to meeting all the
          talented young models who will be auditioning for New York Kids
          Runway!
        </p>

        {/* PARAGRAPH */}
        <p>
          NYK Runway is the place for all models, whether you’re experienced or
          thinking about trying something new. This is your time to shine and
          get one step closer to hitting the runway on the big day.
        </p>

        {/* NUMBERED LIST */}
        <ol className="numbered-list">
          <li>
            Age: Children between the ages of 3 and 18 are eligible to apply.
          </li>
          <li>Height and Size: No specific height or size requirement.</li>
          <li>Appearance: Fresh, photogenic look with a bright smile.</li>
          <li>Attitude: Enthusiastic with a positive mindset.</li>
          <li>Experience: Not required but welcomed.</li>
        </ol>

        {/* SUBHEADING */}
        <h2 className="sub-heading">The casting process</h2>

        {/* PARAGRAPH */}
        <p>
          The model casting process offers an amazing opportunity for children
          to show off their unique talents and style in a thrilling and
          enjoyable environment, while also gaining valuable experience in the
          fashion industry.
        </p>

        {/* BULLET POINTS */}
        <ul className="bullet-list">
          <li>
            During the casting process, each child will impress judges with
            confidence and individuality.
          </li>
          <li>
            Selected children will receive runway training, fittings, and
            rehearsal sessions.
          </li>
          <li>
            At the fashion show, children will showcase outfits from various
            designers.
          </li>
        </ul>

        {/* SUBHEADING */}
        <h2 className="sub-heading">What to expect after registration</h2>

        {/* BULLET POINTS */}
        <ul className="bullet-list">
          <li>Submit and complete registration fee ($50).</li>
          <li>Receive confirmation email.</li>
          <li>Audition details sent two weeks before event.</li>
          <li>Details include date, time, location and dress code.</li>
        </ul>
      </section>
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
      <div className="input-group full-width">
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
      </div>

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
