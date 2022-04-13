import React from "react";
import Home from './components/Home';
import About from './components/About';
import Project from "./components/Project";
import Contact from './components/Contact';

import './scss/main.scss'

function App() {
  return (
    <div>
      <Home />
      <About />
      <Project />
      <Contact />
    </div>)
}
export default App;