import React from "react";
import {Route,Switch } from "react-router-dom";
import Contact from "./Contact"
import Home from "./Home";
import About from "./About";

function Main() {  
    return(
    <Switch>
      <Route exact path='/' ><Home /></Route>
      <Route exact path='/about' ><About /></Route>
      <Route exact path='/contact'><Contact /></Route>
    </Switch>)
}
export default Main;