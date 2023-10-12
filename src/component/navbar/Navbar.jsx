import React, { useState } from "react";
import "./Navbar.css";
import Project from "../Project/Project";
const Navbar = () => {
  function MePage() {
    window.scrollTo(0, 0);
  }

  function ProjectMe(e) {
    window.scrollTo(586, 586);
  }

  function SkillsMe() {
    window.scrollTo(1443, 1443);
  }

  function ContactMe() {
    window.scrollTo(2337, 2337);
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <div className="logo_ahmad_portfolio">ahmad</div>
      <div className="navigation_buttons">
        <button onClick={MePage}>Me</button>
        <button onClick={ProjectMe}>Projects</button>
        <button onClick={SkillsMe}>Skills</button>
        <button onClick={ContactMe}>Contact</button>
      </div>
      <button className="menu-bar__toggle-button" onClick={toggleMenu}>
        {isMenuOpen ? "Close" : "Menu"}
      </button>
      <ul className={`menu-bar__items ${isMenuOpen ? "open" : ""}`}>
        <button onClick={MePage} className="menu-bar__item">
          Me
        </button>
        <button onClick={ProjectMe} className="menu-bar__item">
          Projects
        </button>
        <button onClick={SkillsMe} className="menu-bar__item">
          Skills
        </button>
        <button onClick={ContactMe} className="menu-bar__item">
          Contact
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
