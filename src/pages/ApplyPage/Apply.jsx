import React, { useState, useRef } from "react";
import { Mail, ArrowRight, CheckCircle, Info, Crown } from "lucide-react";
import "./Apply.scss";
import DesignerFrom from "./components/DesignerFrom";
import ModelForm from "./components/ModelForm";
import KidsModelForm from "./components/KidsModelForm";
export const Apply = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const formRef = useRef(null);

  // PASTE YOUR GOOGLE FORM ACTION URL HERE
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSe1tpZvuzxxBMhNJMGVm57Jd10v5U1xPVcz_Yl4qp4uwNyJZg/formResponse";

  // PASTE YOUR GOOGLE ENTRY IDs HERE

  const FORM_MAPPING = {
    interest: "entry.1699495930",
    event: "entry.1148016379", // <--- REPLACE WITH YOUR GOOGLE ENTRY ID FOR EVENT
    firstName: "entry.1497232785",
    lastName: "entry.942242057",
    email: "entry.1036754728",
    phone: "entry.1934688489",
    height: "entry.1499169759",
    bust: "entry.374544040",
    waist: "entry.874790301",
    hips: "entry.623523113",
    message: "entry.1699616894",
  };
  const GOOGLE_FORMS = {
    DESIGNER: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeqeTkIR7gR4lqT0gql4ffn2FTARzScc70EOJjgd3NAHdhkkg/formResponse",
      mapping: {
        interest: "entry.xxxxxx", // NEW: Workshop vs Fashion
        event: "entry.xxxxxx", // NEW: Location Dropdown
        firstName: "entry.xxxxxx",
        lastName: "entry.xxxxxx",
        phone: "entry.xxxxxx",
        country: "entry.xxxxxx",
        email: "entry.xxxxxx",
        companyName: "entry.xxxxxx",
        areYouModel: "entry.xxxxxx",
        website: "entry.xxxxxx",
        instagram: "entry.xxxxxx",
        pastShows: "entry.xxxxxx",
        designCount: "entry.xxxxxx",
        eventInterested: "entry.xxxxxx", // Specific Sony Hall dates
        retailCategory: "entry.xxxxxx",
        budget: "entry.xxxxxx",
        contactTime: "entry.xxxxxx",
        sourcePlatform: "entry.xxxxxx",
      },
    },

    MODEL: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfodaXy6BVg1ytWakiv_KKIejZcBjHLzZ80dNdSZTuQhscpVg/formResponse",
      mapping: {
        interest: "entry.xxxxxx", // NEW
        event: "entry.xxxxxx", // NEW
        fullName: "entry.xxxxxx",
        email: "entry.xxxxxx",
        phone: "entry.xxxxxx",
        age: "entry.xxxxxx",
        gender: "entry.xxxxxx",
        locationState: "entry.xxxxxx",
        height: "entry.xxxxxx",
        ethnicity: "entry.xxxxxx",
        portfolio: "entry.xxxxxx",
        instagram: "entry.xxxxxx",
        previouslySelected: "entry.xxxxxx",
      },
    },

    "KIDS MODEL": {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSduaJ7VWLeO2cOIyDKzP-knO1TXjjrv-5qc2gO17EGOmvDBgg/formResponse",
      mapping: {
        interest: "entry.xxxxxx", // NEW
        event: "entry.xxxxxx", // NEW
        firstName: "entry.xxxxxx",
        lastName: "entry.xxxxxx",
        email: "entry.xxxxxx",
        phone: "entry.xxxxxx",
        gender: "entry.xxxxxx",
        parentsName: "entry.xxxxxx",
        eyeColour: "entry.xxxxxx",
        hairColour: "entry.xxxxxx",
        age: "entry.xxxxxx",
        dressSize: "entry.xxxxxx",
        ethnicity: "entry.xxxxxx",
        height: "entry.xxxxxx",
        experience: "entry.xxxxxx",
        residence: "entry.xxxxxx",
        applyingShow: "entry.xxxxxx", // Specific cities checkboxes
        catalogShoot: "entry.xxxxxx",
        referral: "entry.xxxxxx",
        agencyName: "entry.xxxxxx",
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(formRef.current);
    // URLSearchParams is better for "no-cors" Google Form submissions
    const googleData = new URLSearchParams();

    const currentForm = GOOGLE_FORMS[activeTab];

    // Loop through your mapping
    Object.keys(currentForm.mapping).forEach((key) => {
      const entryId = currentForm.mapping[key];

      // CRITICAL UPDATE: Use .getAll() instead of .get()
      // This handles checkboxes (multiple values for one entry ID)
      const values = formData.getAll(key);

      values.forEach((value) => {
        // Only append if there is actually a value
        if (value !== "" && value !== null) {
          googleData.append(entryId, value);
        }
      });
    });

    try {
      await fetch(currentForm.url, {
        method: "POST",
        mode: "no-cors", // Required for Google Form cross-origin posts
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: googleData.toString(),
      });

      setFormStatus("success");
      formRef.current.reset();

      // Optional: Reset status after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form", error);
      setFormStatus("idle");
      alert("There was an error submitting the form. Please try again.");
    }
  };
  const [activeTab, setActiveTab] = useState("DESIGNER");

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="page-header">
          <h1>Contact / Register</h1>
          <p>
            Start your Royal Runway journey. Apply for workshops or runway
            shows.
          </p>
        </div>

        <div className="application-form-box">
          <div className="interest-label">I am interested in</div>

          <div className="application-tabs">
            {["DESIGNER", "MODEL", "KIDS MODEL"].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="accent-line"></div>
          {formStatus === "success" ? (
            <div className="success-message">
              <div className="icon-wrapper">
                <CheckCircle />
              </div>
              <h3>Application Received</h3>
              <p>Our team will review your submission.</p>
              <button onClick={() => setFormStatus("idle")}>
                Submit Another
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="selection-group">
                <div className="radio-options">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="interest"
                      value="6-Day Workshop"
                      defaultChecked
                    />
                    <div className="option-box">
                      <span>Workshop</span>
                    </div>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="interest" value="Fashion" />
                    <div className="option-box">
                      <span>Fashion Show</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Event Select Field - Updated class for horizontal layout */}
              <div className="input-group horizontal-select">
                <label>Select Event Location</label>
                <div className="select-wrapper">
                  <select name="event" required defaultValue="">
                    <option value="" disabled hidden>
                      Choose location...
                    </option>
                    <option value="New York">New York</option>
                    <option value="Cannes">Cannes</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                  </select>
                </div>
              </div>

              {activeTab === "DESIGNER" && <DesignerFrom />}

              {activeTab === "MODEL" && <ModelForm />}

              {activeTab === "KIDS MODEL" && <KidsModelForm />}

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="submit-btn"
              >
                <span>
                  {formStatus === "submitting"
                    ? "Processing..."
                    : "Submit Application"}
                </span>
                {!formStatus === "submitting" && (
                  <ArrowRight className="arrow-icon" />
                )}
              </button>
            </form>
          )}
        </div>

        {/* <div className="contact-footer">
            <h4>Royal Runway Inquiries</h4>
            <div className="footer-details">
                <span><Mail /> info@royalrunway.com</span>
            </div>
        </div> */}
      </div>
    </div>
  );
};
export default Apply;
