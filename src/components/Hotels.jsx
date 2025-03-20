import React from "react";
import "./Hotels.css";

import popularStaysImage from "../assets/Popular Stays.png";

const PopularStays = () => {
  return (
    <section className="popular-stays-section">
      <img 
        src={popularStaysImage} 
        alt="Popular Stays" 
        className="popular-stays-image" 
      />
    </section>
  );
};

export default PopularStays;
