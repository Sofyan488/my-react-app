import React from "react";
import "./RecentSearches.css";

const RecentSearches = () => {
  return (
    <section className="recent-searches-section">
      <h2>RECENT SEARCHES</h2>
      <div className="search-cards-container">
        {/* البطاقة الأولى */}
        <div className="search-card">
          <div className="search-header">
            <span className="airport-code">SIN</span>
            <div className="plane-route">
              <span className="dotted-circle">●</span>
              <span className="plane">✈</span>
              <span className="dotted-circle">●</span>
            </div>
            <span className="airport-code">LAX</span>
          </div>
          <p className="depart-info">
            Depart On: <strong>7 Sep 2021</strong>
          </p>
        </div>

        {/* البطاقة الثانية */}
        <div className="search-card">
          <div className="search-header">
            <span className="airport-code">MY</span>
            <div className="plane-route">
              <span className="dotted-circle">●</span>
              <span className="plane">✈</span>
              <span className="dotted-circle">●</span>
            </div>
            <span className="airport-code">DUB</span>
          </div>
          <p className="depart-info">
            Depart On: <strong>9 Sep 2021</strong>
          </p>
        </div>
      </div>

      <h2 className="prepare-title">PREPARE FOR YOUR TRIP</h2>
      <div className="trip-icons-container">
        <div className="trip-icon">
          {/* يمكن وضع صورة بدلاً من الإيموجي */}
          <div className="icon-circle" style={{ backgroundColor: "#FF6E82" }}>🏨</div>
          <p>Hotel</p>
        </div>
        <div className="trip-icon">
          <div className="icon-circle" style={{ backgroundColor: "#FFA94D" }}>🎟</div>
          <p>Attractions</p>
        </div>
        <div className="trip-icon">
          <div className="icon-circle" style={{ backgroundColor: "#4CD964" }}>🍽</div>
          <p>Eats</p>
        </div>
        <div className="trip-icon">
          <div className="icon-circle" style={{ backgroundColor: "#FFC526" }}>🚌</div>
          <p>Commute</p>
        </div>
        <div className="trip-icon">
          <div className="icon-circle" style={{ backgroundColor: "#4DAFFF" }}>🚕</div>
          <p>Taxi</p>
        </div>
        <div className="trip-icon">
          <div className="icon-circle" style={{ backgroundColor: "#8EE000" }}>🎬</div>
          <p>Movies</p>
        </div>
      </div>
    </section>
  );
};

export default RecentSearches;
