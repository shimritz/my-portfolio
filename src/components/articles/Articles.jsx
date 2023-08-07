import React from "react";
import "./articles.css";
import CodeImg from "../../assets/code.jpg";
import ComingSoon from "../../assets/coming-soon-image.jpg";

const Services = () => {
  return (
    <section id="articles">
      <h5>What I Published</h5>
      <h2>Articles & Presentations</h2>

      <div className="container articles__container">
        <article className="article">
          <img src={CodeImg} alt="code-image" className="article__image" />
          <div className="article__description">
            <h3>State Changes In React.js and Vue.js</h3>
            <p>
              This article introduces the similarities and differences between
              the useEffect hook in React and the watch directive in Vue..
            </p>
            <a href="https://dev.to/shimritz/state-changes-in-reactjs-and-in-vuejs-3em2">
              Read More
            </a>
          </div>
        </article>

        <article className="article">
          <img
            src={ComingSoon}
            alt="ComingSoon__image"
            className="article__image"
          />
          <div className="article__description">
            <h3>To Be Added</h3>
            <p>Working on it!</p>
            <a href="#">Read More</a>
          </div>
        </article>

        <article className="article">
          <img
            src={ComingSoon}
            alt="ComingSoon__image"
            className="article__image"
          />
          <div className="article__description">
            <h3>To Be Added</h3>
            <p>Working on it!</p>
            <a href="#">Read More</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
