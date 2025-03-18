import React from "react";
import "./Hotels.css";
import matterhornImg from "../assets/Matterhorn Suites Image.png";
import discoveryImg from "../assets/Discovery Shores Image.png";
import arcticImg from "../assets/Arctic Hut Image.png";
import lakeLouiseImg from "../assets/Lake Louise Image.png";

const Hotels = () => {
  const hotels = [
    {
      name: "Matterhorn Suites",
      price: "$575/night",
      rating: "4.9",
      reviews: 60,
      image: matterhornImg,
    },
    {
      name: "Discovery Shores",
      price: "$360/night",
      rating: "4.8",
      reviews: 116,
      image: discoveryImg,
    },
    {
      name: "Arctic Hut",
      price: "$420/night",
      rating: "4.7",
      reviews: 78,
      image: arcticImg,
    },
    {
      name: "Lake Louise Inn",
      price: "$244/night",
      rating: "4.6",
      reviews: 63,
      image: lakeLouiseImg,
    },
  ];

  return (
    <section className="hotels">
      <h2>Popular Stays</h2>
      <div className="hotels-cards">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p>{hotel.price}</p>
            <p>⭐ {hotel.rating} ({hotel.reviews} reviews)</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hotels;
