import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="card-wrapper">
        <div className="card">
          <img src="/img/react.svg" alt="react" />
          <p>REACT JS</p>
        </div>
        <div className="card">
          <img src="/img/html.svg" alt="html" />
          <p>HTML</p>
        </div>
        <div className="card">
          <img src="/img/css.svg" alt="css" />
          <p>CSS</p>
        </div>
        <div className="card">
          <img src="/img/js.svg" alt="js" />
          <p>JS</p>
        </div>
        <div className="card">
          <img src="/img/tailwind.svg" alt="tailwind" />
          <p>TAILWIND CSS</p>
        </div>
        <div className="card">
          <img src="/img/botstrapt.svg" alt="botstrapt" />
          <p>BOTSTRAPT CSS</p>
        </div>
        <div className="card">
          <img src="/img/node.svg" alt="nodejs" />
          <p>NODE JS </p>
        </div>
        <div className="card">
          <img src="/img/ex.svg" alt="expreesjs" />
          <p>EXPREES JS </p>
        </div>
        <div className="card">
          <img src="/img/mongodb.svg" alt="mongodb" />
          <p>MONGODB</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
