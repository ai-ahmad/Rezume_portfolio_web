import React from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import About from "./component/About/About";
import Project from "./component/Project/Project";
import Skills from "./component/Skills/Skills";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
