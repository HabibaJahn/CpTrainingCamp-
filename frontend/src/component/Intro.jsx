import React from "react";
import leftImage from "../assets/images/right.png";
import rightImage from "../assets/images/left.png";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="section">
      {/* Left Image */}
      <div className="left-image">
        <img src={leftImage} alt="Left Image" className="w-full h-full object-cover" />
      </div>

      {/* Right Image */}
      <div className="right-image">
        <img src={rightImage} alt="Right Image" className="w-full h-full object-cover" />
      </div>

      {/* Text Content (Centered) */}
      <div className="text-content">
        <h2>SUST CP Training Camp</h2>
        <p>
          Level up your coding skills through expert-led classes and intense contests.
        </p>
        <button>Read More</button>
      </div>
    </section>
  );
};

export default Intro;
