import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
//import NoMatch from "../NoMatch";
import { AnimatePresence } from "framer-motion";

//variants for animations
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home variants={variants} />
        </Route>
        <Route path="/about">
          <About variants={variants} />
        </Route>
        <Route path="/Projects">
          <Projects variants={variants} />
        </Route>
        <Route path="/Contact">
          <Contact variants={variants} />
        </Route>
        {/* <Route path="*">
        <NoMatch />
      </Route> */}
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
