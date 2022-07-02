// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { Navbar } from "./components/index";
import { Routes } from "./containers/index";

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
