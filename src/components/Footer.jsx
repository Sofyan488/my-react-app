import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <p>
          Fickle Flight is your one-stop travel portal. We offer hassle free flight 
          and hotel bookings. We also have all your flight needs in our online shop.
        </p>
      </div>
      <div className="footer-links">
        <ul>
          <li><strong>About Us</strong></li>
          <li>Company</li>
          <li>News</li>
          <li>Careers</li>
          <li>How we work</li>
        </ul>
        <ul>
          <li><strong>Account</strong></li>
          <li>Support Center</li>
          <li>FAQ</li>
          <li>Accessibility</li>
          <li>Covid Advisory</li>
        </ul>
        <ul>
          <li><strong>More</strong></li>
          <li>Airline Fees</li>
          <li>Tips</li>
          <li>Quarantine Rules</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Fickle Flight. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
