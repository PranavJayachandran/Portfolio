import React from "react";
import "./portfolio.css";

import IMG6 from "../../assets/IMG6.png";
import IMG5 from "../../assets/IMG5.png";
import IMG7 from "../../assets/IMG7.png";
import IMG8 from "../../assets/IMG8.png";
import IMG9 from "../../assets/IMG9.png";

const data = [
  {
    id: 4,
    image: IMG8,
    title: "Graph Visualizer",
    github: "https://github.com/PranavJayachandran/Graph-Visualiser",
    link: "https://graph-visualiser-865c4.web.app/",
  },
  {
    id: 5,
    image: IMG7,
    title: "Blockchain based Patient Storage App",
    github: "https://github.com/PranavJayachandran/Patient-Details-Storage",
    link: "https://health-app-5d1c4.web.app/",
  },
  {
    id: 6,
    image: IMG9,
    title: "RoadMap for Competitive Programming",
    github: "https://github.com/PranavJayachandran/CP-RoadMap",
    link: "https://cp-roadmap.web.app/",
  },
  {
    id: 2,
    image: IMG6,
    title: "Netflix Clone",
    github: "https://github.com/PranavJayachandran/neflix-clone",
    link: "https://netflix-clone-1c7dc.web.app/",
  },
  {
    id: 1,
    image: IMG5,
    title: "Front End For Chat App",
    github: "https://github.com/PranavJayachandran/chatting-app",
    link: "https://chatting-app-90d74.web.app/",
  },
];

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, link }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3> {title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={link} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default portfolio;
