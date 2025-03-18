import React from "react";
import "./Destinations.css";
import parisImg from "../assets/ParisImage.png";
import greeceImg from "../assets/GreeceImage.png";
import norwayImg from "../assets/NorwayImage.png";
import tuscanyImg from "../assets/TuscanyImage.png";

const Destinations = () => {
  const destinations = [
    { name: "Paris", price: "$699", image: parisImg },
    { name: "Greece", price: "$1079", image: greeceImg },
    { name: "Norway", price: "$895", image: norwayImg },
    { name: "Tuscany", price: "$1245", image: tuscanyImg },
  ];

  return (
    <section className="destinations-section">
      <div className="destinations-header">
        <h2>Most Popular Destinations</h2>
        <a href="#" className="view-all-destinations">
          View all destinations <span>→</span>
        </a>
      </div>

      <div className="destinations-cards">
        {destinations.map((dest, i) => (
          <div key={i} className="destination-card">
            <img src={dest.image} alt={dest.name} />
            <div className="overlay">
              <span className="name">{dest.name}</span>
              <span className="price">FROM {dest.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
