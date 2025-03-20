import React from 'react';
import './Footer.css';
import footerImage from '../assets/Footer Section.png';

const Footer = () => {
  return (
    <footer className="footer-section">
   
      <img src={footerImage} alt="Footer" className="footer-image" />
    </footer>
  );
};

export default Footer;
