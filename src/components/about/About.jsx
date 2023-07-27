import React from "react";
import "./about.css";
import ME from "../../assets/OIP.png";
import { FaAward } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { GiHobbitDwelling } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiHobbitDwelling className="about__icon" />
              <h5>Hobbies</h5>
              <small>coffee & code</small>
            </article>

            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year Working-internship</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6 and still growing..</small>
            </article>
          </div>

          <p>
            I'm 36 years old and a proud mother of two! I found my interst in
            web development 3 years ago and started actuall programming 1.5 year
            ago and ever since I keep learning and challenging myself in I'm
            currently a full-stack developer intern at Qelos and
            ....................
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
