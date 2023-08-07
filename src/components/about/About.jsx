import React from "react";
import "./about.css";
import ME from "../../assets/shimritPic2.jpg";

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
              <small>drinking coffee & code</small>
            </article>

            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year Working-internship </small>
              <br></br>
              <small>1 Year Bootcamp-experience</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6 and still growing..</small>
            </article>
          </div>

          <p>
            I am a software developer with a unique blend of experience in web
            development, quality assurance (QA), and education. My development
            skills were honed at Qelos, while my meticulous attention to detail
            in QA was sharpened at Matrix, working on projects for a large
            financial institution. My experience as a Java Instructor has
            equipped me with the ability to guide and assist other developers
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
