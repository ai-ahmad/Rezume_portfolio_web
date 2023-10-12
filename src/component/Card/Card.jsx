import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ imgSrc, title, githubLink }) => {
  return (
    <div className="project-card">
      <img src={imgSrc} alt={title} />
      <h4>{title}</h4>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
      <div className="code-example"></div>
    </div>
  );
};

export default Card;
