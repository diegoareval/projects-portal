import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from "../containers/contact";
import Faq from "../containers/faq";
import  HomePage  from "../containers/HomePage";
import Projects from "../containers/projects";
import Services from "../containers/services";

export default function Routers() {
  return (
    <Router>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}