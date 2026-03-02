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
        interest: "entry.422258960",
        event: "entry.951625884",
        firstName: "entry.1283991113",
        lastName: "entry.2045369097",
        phone: "entry.695103094",
        country: "entry.1027587743",
        email: "entry.814548489",
        companyName: "entry.74631674",
        areYouModel: "entry.2013301527",
        website: "entry.1756027588",
        instagram: "entry.1477245191",
        pastShows: "entry.561114103",
        designCount: "entry.243113088",
        eventInterested: "entry.725140577",
        retailCategory: "entry.2092669335",
        budget: "entry.1992942859",
        contactTime: "entry.699452827",
        sourcePlatform: "entry.612475021",
      },
    },

    MODEL: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfodaXy6BVg1ytWakiv_KKIejZcBjHLzZ80dNdSZTuQhscpVg/formResponse",
      mapping: {
        interest: "entry.1858645529",
        event: "entry.1613497725",
        fullName: "entry.1433854423",
        email: "entry.637277739",
        phone: "entry.496432421",
        age: "entry.1033967285",
        locationState: "entry.275189354",
        gender: "entry.955563761",
        height: "entry.1286068029",
        ethnicity: "entry.845701687",
        portfolio: "entry.675032621",
        instagram: "entry.202249256",
        previouslySelected: "entry.700136409",
      },
    },

    KIDS_MODEL: {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSduaJ7VWLeO2cOIyDKzP-knO1TXjjrv-5qc2gO17EGOmvDBgg/formResponse",
      mapping: {
        interest: "entry.1026348622",
        event: "entry.527903157",
        childFirstName: "entry.462259523",
        childLastName: "entry.719961170",
        email: "entry.1708209574",
        phone: "entry.2033733952",
        gender: "entry.927029866",
        parentName: "entry.849894346",
        eyeColor: "entry.725279344",
        hairColor: "entry.540066982",
        age: "entry.998591382",
        tShirtSize: "entry.803907402",
        ethnicity: "entry.1379404727",
        height: "entry.292368546",
        hasExperience: "entry.2025421893",
        locationState: "entry.280734860",
        interestedCity: "entry.1567637499",
        previouslySelected: "entry.1003024267",
        howDidYouHear: "entry.194072259",
        representation: "entry.1590157790",
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formElement = e.target;
    const formConfig = GOOGLE_FORMS[activeTab]; // MODEL / DESIGNER / KIDS_MODEL

    if (!formConfig) {
      console.error("No form config found for:", activeTab);
      return;
    }

    const formDataToSend = new FormData();

    // Collect normal inputs
    Object.keys(formConfig.mapping).forEach((key) => {
      const field = formElement.elements[key];

      if (!field) return;

      // 🔥 HANDLE CHECKBOX (multi-select)
      if (field.type === "checkbox") {
        const checkboxes = formElement.querySelectorAll(
          `input[name="${key}"]:checked`,
        );

        checkboxes.forEach((checkbox) => {
          formDataToSend.append(formConfig.mapping[key], checkbox.value);
        });
      }

      // 🔥 HANDLE RADIO
      else if (field.type === "radio") {
        const selected = formElement.querySelector(
          `input[name="${key}"]:checked`,
        );

        if (selected) {
          formDataToSend.append(formConfig.mapping[key], selected.value);
        }
      }

      // 🔥 HANDLE NORMAL INPUT / SELECT
      else {
        if (field.value) {
          formDataToSend.append(formConfig.mapping[key], field.value);
        }
      }
    });

    try {
      await fetch(formConfig.url, {
        method: "POST",
        mode: "no-cors", // 🔥 REQUIRED for Google Forms
        body: formDataToSend,
      });

      setFormStatus("success");

      formElement.reset();
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please try again.");
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
            {["DESIGNER", "MODEL", "KIDS_MODEL"].map((tab) => (
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

              {activeTab === "KIDS_MODEL" && <KidsModelForm />}

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
