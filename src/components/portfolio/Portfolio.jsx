import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Screenshot N-E APP.png";
import IMG2 from "../../assets/aroundTheUSapp.png";
import IMG3 from "../../assets/Screenshot TOURDINATOR APP.png";
import IMG4 from "../../assets/Screenshot CofeeShop APP.png";
import IMG5 from "../../assets/QA Automation IMG.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "News Explorer App",
    github: "https://github.com/shimritz/news-explorer-frontend.git",
    demo: "https://news-explorer-frontend-psi.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Around the U.S App",
    github: "https://github.com/shimritz/react-around-api-full.git",
    demo: "https://react-around-api-full-pi.vercel.app/signin",
  },
  {
    id: 3,
    image: IMG3,
    title: "Tourdinator",
    github: "https://github.com/shimritz/tourdinator.git",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "Practicum Coffee Shop",
    github: "https://github.com/shimritz/web_project_2.git",
    demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "Teaching basic java",
    github: "https://github.com/shimritz/qa_java.git",
    demo: "",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          if (id !== 3 || id !== 5) {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          } else {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                </div>
              </article>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Portfolio;
