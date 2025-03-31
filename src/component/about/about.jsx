import React from "react";
import "./about.css";
import ME from "../../assets/me-2.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillFolder } from "react-icons/ai";

function about() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About things" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Competetive Programmer</h5>
              <br></br>
              <small className="gap">Expert at Codeforces</small>
              <br></br>
              <small>5 star at Codechef</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Wed Developer</h5>
              <br></br>
              <small className="gap">
                HTML, CSS, JS, TS, ReactJs, Go, .NET, NodeJS, ExpressJS, Angular
              </small>
            </article>
          </div>
          <p>
            Hai there, I am Pranav Jayachandran. A Computer Science Undergrad,
            who is passionate about various Web Technologies and loves
            Competetive Programming.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
export default about;
