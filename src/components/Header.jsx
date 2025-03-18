import React from "react";
import "./Header.css";

// استورد الصور من مجلد src/assets
import bellIcon from "../assets/bell.png";
import userIcon from "../assets/user.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="logo">FickleFlight</span>
      </div>

      <div className="header-right">
        <nav className="nav-links">
          <ul>
            <li><a href="#" className="active">Explore</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </nav>

        <div className="header-icons">
  
          <img src={bellIcon} alt="Bell" className="icon" />
          <img src={userIcon} alt="User" className="user-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
