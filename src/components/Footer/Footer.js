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
        <p>
          If you have any questions or feedback, please email us at  {'  '}
          <a className="email-link" href="mailto:acknowledgingourlands@gmail.com">acknowledgingourlands@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
