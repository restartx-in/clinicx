import React from "react";

const KidsAuditionSection = () => {
  return (
    <section className="audition-section">
      <h1 className="main-heading">The Audition</h1>

      <p>
        We believe that every child is unique and has their own special
        qualities to bring to the runway. Our goal is to showcase a diverse
        range of children's fashion styles, so we encourage children of all
        backgrounds and abilities to apply.
      </p>

      <p>
        NYK Runway is the place for all models, whether you’re experienced or
        thinking about trying something new.
      </p>

      <ol className="numbered-list">
        <li>Age: 3–18 years</li>
        <li>No height or size requirement</li>
        <li>Fresh, photogenic look</li>
        <li>Positive attitude</li>
        <li>Experience welcomed but not required</li>
      </ol>

      <h2 className="sub-heading">The casting process</h2>

      <ul className="bullet-list">
        <li>Children showcase confidence & individuality</li>
        <li>Selected kids receive runway training</li>
        <li>Fashion show participation opportunity</li>
      </ul>

      <h2 className="sub-heading">What to expect after registration</h2>

      <ul className="bullet-list">
        <li>Complete registration fee ($50)</li>
        <li>Receive confirmation email</li>
        <li>Audition details sent 2 weeks before event</li>
      </ul>
    </section>
  );
};

export default KidsAuditionSection;