import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact"
import Home from "./Home";
import Project from './Project';

function Main() {
  return (
    <Switch>
      <Route exact path='/' ><Home /></Route>

      <Route exact path='/projects' ><Project /></Route>
      <Route exact path='/contact'><Contact /></Route>
    </Switch>)
}
export default Main;