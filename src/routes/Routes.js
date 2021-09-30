import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Project from "../Pages/Project";
import Education from "../Pages/Education";
import Navigation from "./Navigation";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/project" component={Project}></Route>
      <Route exact path="/edu" component={Education} />
    </Router>
  );
};

export default Routes;
