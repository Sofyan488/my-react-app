import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <h2>Get weekly updates</h2>
        <p>Fill in your details to join the party!</p>

        <form className="newsletter-form">
          <label>
            Your name
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="Enter your email" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
