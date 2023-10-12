import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="text-info-site">
        <h3>Ahmad Ahmedov</h3>
        <p>
          2023 | Build with ❤️ by me | source on{" "}
          <a href="https://github.com/">GIT HUB</a>
        </p>
      </div>
      <div className="footer-link">
        <a href="https://www.instagram.com/akhmad_x1/">
          <img src="/img/instagram.svg" alt="instagram" />
        </a>
        <a href="https://t.me/ahmedovAhmed112">
          <img src="/img/telegram.svg" alt="telegram" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
