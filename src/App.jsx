import "./App.module.scss";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./containers/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  AOS.init();
  return (
    <Router basename="/">
      <ScrollToTop />
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
