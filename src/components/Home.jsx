import React from "react";
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div className='home'>
      <h1>Hello, I am Aya</h1>
      <p> Full-stack web developer </p>
      <NavLink to="/project">Discover Projects</NavLink>
    </div>
  )
}

export default Home;