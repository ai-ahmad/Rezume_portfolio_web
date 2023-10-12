import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="text-about">
          <div>
            <h2 className="title">It’s Ahmad.</h2>
          </div>
          <div>
            <h3>
              A Self-Taught <span>full-stack engineer</span>
            </h3>
          </div>
          <div>
            <p>
              A logical and creative thinker who enjoys learning new languages,
              frameworks, and technologies in general. Excited to be part of the
              future of the technology industry with the ability of all advanced
              technology!
            </p>
          </div>
        </div>
        <div>
          <img src="/img/me.png" alt="" className="img_about_me" />
        </div>
      </section>
    </>
  );
};

export default About;
