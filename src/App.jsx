import React from "react";

import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Education from "./components/Education";
import "./scss/main.scss";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Project />
      <Education />
      <Contact />
    </div>
  );
}
export default App;
