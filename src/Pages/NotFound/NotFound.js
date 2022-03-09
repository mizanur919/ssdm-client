import React from "react";
import "./NotFound.css";
import pageNotFound from "../../Images/pagenotfound.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="pageNotFound-Image">
        <img src={pageNotFound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
