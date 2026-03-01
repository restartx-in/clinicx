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
      url: "DESIGNER_FORM_RESPONSE_URL",
      mapping: {
        firstName: "entry.xxxxxx",
        lastName: "entry.xxxxxx",
        email: "entry.xxxxxx",
        phone: "entry.xxxxxx",
        country: "entry.xxxxxx",
        companyName: "entry.xxxxxx",
        category: "entry.xxxxxx",
        website: "entry.xxxxxx",
        instagram: "entry.xxxxxx",
        budget: "entry.xxxxxx",
        shows: "entry.xxxxxx",
        platform: "entry.xxxxxx",
      },
    },

    MODEL: {
      url: "MODEL_FORM_RESPONSE_URL",
      mapping: {
        fullName: "entry.xxxxxx",
        email: "entry.xxxxxx",
        phone: "entry.xxxxxx",
        age: "entry.xxxxxx",
        gender: "entry.xxxxxx",
        location: "entry.xxxxxx",
        height: "entry.xxxxxx",
        ethnicity: "entry.xxxxxx",
        portfolio: "entry.xxxxxx",
        instagram: "entry.xxxxxx",
        selectedNyfw: "entry.xxxxxx",
      },
    },

    "KIDS MODEL": {
      url: "KIDS_MODEL_FORM_RESPONSE_URL",
      mapping: {
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
        race: "entry.xxxxxx",
        height: "entry.xxxxxx",
        experience: "entry.xxxxxx",
        city: "entry.xxxxxx",
        showApplying: "entry.xxxxxx",
        catalogShoot: "entry.xxxxxx",
        heardFrom: "entry.xxxxxx",
        agency: "entry.xxxxxx",
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(formRef.current);
    const googleData = new FormData();

    const currentForm = GOOGLE_FORMS[activeTab];

    Object.keys(currentForm.mapping).forEach((key) => {
      googleData.append(currentForm.mapping[key], formData.get(key) || "");
    });

    try {
      await fetch(currentForm.url, {
        method: "POST",
        mode: "no-cors",
        body: googleData,
      });

      setFormStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Error submitting form", error);
      setFormStatus("idle");
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
                    <input
                      type="radio"
                      name="interest"
                      value="Fashion Show Season 2"
                    />
                    <div className="option-box">
                      <span>Fashion Show Season 2</span>
                    </div>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="interest"
                      value="Luxury Package"
                    />
                    <div className="option-box">
                      <span>Luxury Package Info</span>
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
