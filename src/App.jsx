import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
