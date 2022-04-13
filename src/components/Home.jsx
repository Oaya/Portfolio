import React from "react";
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div className='home'>
      <div className='home__heading'>
        <h1 >Hello, I am Aya</h1>
        <p>Full-stack developer who is transitioning career from being a baker. I love desinging and creating things and I am passionate leaning and developing apps that better user's lives. </p>
        <p>I have a diverse set of skills for modern web technologies for frontend and backend including HTML, CSS, SCSS, JavaScript, React, Next.js, jQuery, Ruby on Rails, Node.js, Express, PostgreSQL and MongoDB.</p>
      </div>
      <NavLink className="home__btn" to="project">Discover Projects</NavLink>
    </div>
  )
}

export default Home;