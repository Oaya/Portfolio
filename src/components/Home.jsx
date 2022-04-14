import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__heading">
        <h1>Hello, I am Aya</h1>

        <p>
          I am a full-stack developer who is
          transitioning career from being a baker.
          I love designing and creating things and
          I am passionate about learning and
          developing apps that better users'
          lives.{" "}
        </p>
        <p>
          I have a diverse set of skills for
          modern web technologies for frontend and
          backend including{" "}
          <span>
            HTML, SCSS, JavaScript, Typescript,
            React, Next.js, jQuery, Ruby on Rails,
            Node.js, Express, PostgreSQL
          </span>{" "}
          and<span> MongoDB</span>.
        </p>
      </div>
      <a
        href="https://drive.google.com/file/d/13GwRl-o4YAuZLwEic-SW2NQTWpmS5nIE/view?usp=sharing"
        className="home__btn"
      >
        View My Resume
      </a>
    </div>
  );
}

export default Home;
