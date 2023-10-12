import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  let [info, setInfo] = useState({
    fullName: "",
    email: "",
    text: "",
  });

  function setEmail(e) {}
  console.log(info);
  return (
    <section className="contact-section">
      <h2>SAY HELLO TO ME</h2>
      <div className="wrapper">
        <div>
          <img src="/img/contact.png" alt="" />
        </div>
        <div>
          <h4>
            My E-mail:
            <a href="mailto:ahmedovalmat8@gmail.com">ahmedovahmad@gmail.com</a>
          </h4>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setInfo({ ...info, fullName: e.target.value })}
            />
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Text"
              onChange={(e) => setInfo({ ...info, text: e.target.value })}
            ></textarea>
            <button type="button" onClick={setEmail} className="post-button">
              <img src="/img/telegram.svg" alt="telegram" />
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
