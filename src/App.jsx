// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./containers/Routes";

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
