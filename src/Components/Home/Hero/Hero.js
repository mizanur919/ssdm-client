import React from "react";
import "./Hero.css";
import ATL from "../../../Images/atl.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-section-info">
          <div className="hero-section-image">
            <img src={ATL} alt="" />
          </div>
          <div className="hero-section-title">
            <h1 className="text-center">
              Welcome To <br /> Software Support Data Management
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
