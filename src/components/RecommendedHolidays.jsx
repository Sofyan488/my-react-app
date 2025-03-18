import React from "react";
import "./RecommendedHolidays.css";
import baliImg from "../assets/bali.png";
import swissImg from "../assets/SwitzerlandImage.png";
import boracayImg from "../assets/BoracayImage.png";
import palawanImg from "../assets/PalawanImage.png";

const RecommendedHolidays = () => {
  const holidays = [
    { place: "Bali", duration: "4D3N", price: "$899", image: baliImg },
    { place: "Swiss", duration: "6D5N", price: "$900", image: swissImg },
    { place: "Boracay", duration: "5D4N", price: "$699", image: boracayImg },
    { place: "Palawan", duration: "4D3N", price: "$789", image: palawanImg },
  ];

  return (
    <section className="recommended-holidays">
      <div className="holidays-header">
        <h2>Recommended Holidays</h2>
        <a href="#" className="view-all-holidays">
          View all holidays <span>→</span>
        </a>
      </div>
      <div className="holidays-cards">
        {holidays.map((holiday, i) => (
          <div key={i} className="holiday-card">
            <img src={holiday.image} alt={holiday.place} />
            <div className="holiday-info">
              <h3>{holiday.place}</h3>
              <p>{holiday.duration}</p>
              <p className="price">{holiday.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedHolidays;
