import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, CheckCircle } from "lucide-react";
import "./Apply.scss";
import DesignerFrom from "./components/DesignerFrom";
import ModelForm from "./components/ModelForm";
import KidsModelForm from "./components/KidsModelForm";
import KidsAuditionSection from "./components/KidsAuditionSection";

export const Apply = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [activeTab, setActiveTab] = useState("DESIGNER");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const formData = new FormData(formRef.current);

      const selectedTemplate =
        activeTab === "DESIGNER"
          ? import.meta.env.VITE_EMAIL_TEMPLATE_DESIGNER
          : import.meta.env.VITE_EMAIL_TEMPLATE_MODELS;

      const files = formData.getAll("portfolioImages");
      let imageUrls = [];

      for (const file of files) {
        if (file && file.size > 0) {
          if (file.size > 2 * 1024 * 1024) {
            alert("Each image must be under 2MB.");
            setFormStatus("idle");
            return;
          }

          const cloudData = new FormData();
          cloudData.append("file", file);
          cloudData.append(
            "upload_preset",
            import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
          );

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: cloudData,
            },
          );

          const result = await response.json();

          if (result.secure_url) {
            imageUrls.push(result.secure_url);
          }
        }
      }

      const dataObject = {};

      for (let [key, value] of formData.entries()) {
        if (key === "portfolioImages") continue;

        if (dataObject[key]) {
          if (Array.isArray(dataObject[key])) {
            dataObject[key].push(value);
          } else {
            dataObject[key] = [dataObject[key], value];
          }
        } else {
          dataObject[key] = value;
        }
      }

      // Convert arrays to string
      Object.keys(dataObject).forEach((key) => {
        if (Array.isArray(dataObject[key])) {
          dataObject[key] = dataObject[key].join(", ");
        }
      });

      // 🔹 Clean unwanted fields per type

      if (activeTab === "DESIGNER") {
        delete dataObject.fullName;
        delete dataObject.childFirstName;
        delete dataObject.childLastName;
        delete dataObject.parentName;
        delete dataObject.hasExperience;
        delete dataObject.interestedCity;
      }

      if (activeTab === "MODEL") {
        delete dataObject.firstName;
        delete dataObject.lastName;
        delete dataObject.childFirstName;
        delete dataObject.childLastName;
        delete dataObject.companyName;
        delete dataObject.designCount;
      }

      if (activeTab === "KIDS_MODEL") {
        delete dataObject.firstName;
        delete dataObject.lastName;
        delete dataObject.fullName;
        delete dataObject.companyName;
        delete dataObject.designCount;

        // Optional: combine child name into fullName for models template
        dataObject.fullName =
          (dataObject.childFirstName || "") +
          " " +
          (dataObject.childLastName || "");
      }

      dataObject.form_type = activeTab;

      if (imageUrls.length > 0) {
        dataObject.portfolioImages = imageUrls
          .map(
            (url) =>
              `<div style="margin-bottom:15px;">
         <img src="${url}" width="300" style="border-radius:8px;border:1px solid #ddd;" />
       </div>`,
          )
          .join("");
      }

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        selectedTemplate,
        dataObject,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      setFormStatus("success");
      formRef.current.reset();

      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Email submission failed:", error);
      alert("Submission failed. Please try again.");
      setFormStatus("idle");
    }
  };

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
              {activeTab === "KIDS_MODEL" && <KidsAuditionSection />}

              <div className="selection-group">
                <div className="radio-options">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="interest"
                      value="Workshop"
                      defaultChecked
                    />
                    <div className="option-box">
                      <span>Workshop</span>
                    </div>
                  </label>

                  <label className="radio-label">
                    <input type="radio" name="interest" value="Fashion Show" />
                    <div className="option-box">
                      <span>Fashion Show</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Event */}
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

              {/* Dynamic Forms */}
              {activeTab === "DESIGNER" && <DesignerFrom />}
              {activeTab === "MODEL" && <ModelForm />}
              {activeTab === "KIDS_MODEL" && <KidsModelForm />}

              {/* Submit */}
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

                {formStatus !== "submitting" && (
                  <ArrowRight className="arrow-icon" />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apply;
