import React from "react";
import "./RecentSearches.css";

import upcomingFlightSection from "../assets/Upcoming Flight Section.png";

const RecentSearches = () => {
  return (
    <section className="recent-searches-image-section">
      
      <img 
        src={upcomingFlightSection} 
        alt="Recent Searches & Prepare for your trip" 
        className="recent-searches-image"
      />
    </section>
  );
};

export default RecentSearches;
