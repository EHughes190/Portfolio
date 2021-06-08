import React from "react";
import styles from "./Routes.module.scss";

import { Switch, Route } from "react-router-dom";
//Switch is going to render the route that matches the URL
//https://reactrouter.com/web/guides/quick-start
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
//import NoMatch from "../NoMatch";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/Projects">
        <Projects projects={props} />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      {/* <Route path="*">
        <NoMatch />
      </Route> */}
    </Switch>
  );
};

export default Routes;
