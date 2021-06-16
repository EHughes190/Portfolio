import "./App.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./containers/Routes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
