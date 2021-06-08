import logo from "./logo.svg";
import "./App.module.scss";
// import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./containers/Routes";
import projects from "./data/projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes projects={projects} />
    </Router>
  );
}

export default App;
