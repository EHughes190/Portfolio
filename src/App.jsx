import "./App.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./containers/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  AOS.init();
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
