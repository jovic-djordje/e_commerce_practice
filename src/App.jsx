import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Order from "./pages/Order/Order";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
