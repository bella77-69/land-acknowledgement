import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-image"></div>
        <p>
          &copy; {new Date().getFullYear()} Acknowledging Our Lands. All rights
          reserved.
        </p>
        <p>Made with ❤️ by Chantelle</p>
      </div>
    </footer>
  );
}

export default Footer;
