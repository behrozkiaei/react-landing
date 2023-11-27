"use client";

import "../../app/globals.scss";
import "./header.scss"; // Assuming you have a CSS file named Header.css

const Header = () => {
  return (
    <>
      <div className="header-container">
        <header className="header">
          <div className="logo-container">
            <img  src="/logo.png" alt="Apex" className="logo" />{" "}
            <div className="line"></div>
            <h3 className="header-text">Apex Pioneer group</h3>
          </div>
          <div className="button-container">
            <button className="header-button">ABOUT</button>
            <button className="header-button">SERVICES</button>
            <button className="header-button">CONTACT</button>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
