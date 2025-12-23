import React from "react";
import { Star, Camera, Video, Globe, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { PageRoute } from "@/constants/types";
import "./GlobalModels.scss";

export const GlobalModels = () => {
  return (
    <div className="fashion-show-page">
      {/* 2. Cannes / Luxury Package Section */}
      <section className="fs-package">
        <div className="fs-package__container">
          <div className="fs-header">
            <span className="tagline">The Royal Experience</span>
            <h2>Step onto the world’s most iconic runways</h2>
            <p>
              Showcase your talent at Cannes, Dubai, New York, and Los Angeles
              Fashion Weeks, by professional runway coaching in ramp walk,
              choreography, and posing by an acclaimed international trainer.
              Complete the journey with a professional outdoor photoshoot and
              curated designer outfits with full styling. Rise, shine, and leave
              your mark on the global stage.
            </p>
          </div>
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <h2>All-Inclusive Luxury Package</h2>
          </div>
          <div className="fs-grid">
            {/* Styling Card */}
            <div className="fs-card card-wardrobe">
              <div className="card-inner">
                <Star className="icon" />
                <h3>Styling & Wardrobe</h3>
                <p>
                  Two designer outfits with complete styling & accessories
                  curated by industry experts.
                </p>
              </div>
            </div>

            {/* Grooming Card */}
            <div className="fs-card card-grooming">
              <div className="card-inner">
                <Sparkles className="icon" />
                <h3>Grooming</h3>
                <p>
                  Professional hair & makeup by top-tier artists plus 1-month
                  online grooming training.
                </p>
              </div>
            </div>

            {/* Photoshoot Card */}
            <div className="fs-card card-photo">
              <div className="card-inner">
                <Camera className="icon" />
                <h3>Photoshoot</h3>
                <p>
                  Professional outdoor photoshoot in designer wear at a premium
                  location.
                </p>
              </div>
            </div>

            {/* Media Card */}
            <div className="fs-card card-media">
              <div className="card-inner">
                <Video className="icon" />
                <h3>Media</h3>
                <p>
                  Red carpet photoshoot, cinematic highlight video & curated
                  social media reels.
                </p>
              </div>
            </div>

            {/* Training Card */}
            <div className="fs-card card-training">
              <div className="card-inner">
                <Globe className="icon" />
                <h3>Training</h3>
                <p>
                  1 full day of in-person training: ramp walk, dress rehearsal,
                  choreography & posing.
                </p>
              </div>
            </div>

            {/* Highlight Card */}
            <div className="fs-card card-shine ">
              <div className="card-inner">
                <MapPin className="icon" />
                <h3>A Chance to Shine</h3>
                <p>
                  One model will be selected & fully sponsored to compete in{" "}
                  <strong>Miss & Mrs. Glam World</strong> and{" "}
                  <strong>Miss & Mrs. Asia Global</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Optional CTA Footer - Uncomment if needed */}
          {/* <div className="fs-cta">
            <p>Show Opener & Show Stopper spots available at additional cost.</p>
            <Link to={PageRoute.CONTACT} className="btn-register">Apply for Season 2</Link>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default GlobalModels;
