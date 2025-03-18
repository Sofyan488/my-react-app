import React from "react";
import "./SearchSection.css";

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="text-container">
        <h2>Let’s explore & travel the world</h2>
        <p>Find the best destinations and the most popular stays!</p>
      </div>

      <div className="search-box">
        <div className="radio-btns">
          <label>
            <input type="radio" name="trip" defaultChecked />
            Return
          </label>
          <label>
            <input type="radio" name="trip" />
            One-way
          </label>
        </div>
        <div className="inputs">
          <label>
            Departure
            <input type="text" placeholder="Singapore (SIN)" />
          </label>
          <label>
            Arrival
            <input type="text" placeholder="Los Angeles (LA)" />
          </label>
          <label>
            Date
            <input type="date" />
          </label>
          <button>Search flights</button>
        </div>
      </div>

  
    </section>
  );
};

export default SearchSection;
