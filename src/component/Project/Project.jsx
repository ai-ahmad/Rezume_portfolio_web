import React from "react";
import "./Project.css";
import Card from "../Card/Card";
const Project = () => {
  return (
    <section className="project-section">
      <div>
        <h2>MY PROJECTS</h2>
      </div>
      <div className="wrapper-card">
        <Card
          imgSrc="/img/p1.jpg"
          title="This is a portfolio-themed site"
          githubLink="https://github.com/ahmedovdeveloper/portfolio__web__site"
        />
        <Card
          imgSrc="/img/p2.jpg"
          title="This is a pizza-shop-themed site"
          githubLink="https://github.com/AhmadDusse2007/REACT-PIZZA"
        />
        <Card
          imgSrc="/img/p3.jpg"
          title="This is a eccomerce-themed site"
          githubLink="https://github.com/AhmadDusse2007/shop-1"
        />
        <Card
          imgSrc="/img/p4.jpg"
          title="This is a me-portfolio-themed site"
          githubLink="#"
        />
        <Card
          imgSrc="/img/p5.jpg"
          title="This is a group-portfolio-website site"
          githubLink="https://github.com/ahmedovdeveloper/web-site"
        />
        <Card
          imgSrc="/img/p6.jpg"
          title="This is a texnomart-shop site"
          githubLink="https://github.com/AhmadDusse2007/shop_01"
        />
      </div>
    </section>
  );
};

export default Project;
