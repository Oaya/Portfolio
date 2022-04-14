import React from "react";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";

import "./scss/main.scss";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Project />
      <Contact />
    </div>
  );
}
export default App;
