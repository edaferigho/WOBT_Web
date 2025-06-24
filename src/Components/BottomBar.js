import React from "react";
import "./BottomBar.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
// import TelegramIcon from "@material-ui/icons/Telegram";

function BottomBar() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We are a church that believe the 7 thunders, 7 Seals message as preached by our Prophet William 
            Marion Branham.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            Email: <a href="mailto:wordorientedtabernacle@gmail.com">wordorientedbride@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel: 08066914522">+234 8066914522</a>
          </p>
          <p>Address: 13, Edubi Street, Off Up-Agbarho Street, Ughelli, Delta State</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.youtube.com/@wordorientedbride"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon className="icon" />
            </a>
            <a
              href="https://www.facebook.com/wordorientedbride/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="icon" />
            </a>
            {/* <a
              href="https://t.me/OFFICIALKotebeSDAChurch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className="icon" />
            </a> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2025 Word Oriented Bride Tabernacle. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default BottomBar;
