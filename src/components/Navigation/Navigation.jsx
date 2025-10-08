import { SlBasket } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./nav.style.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-holder">
        <p className="logo">E-commerce</p>
        <div className="nav-links">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/offer" className="nav-item">
            Offer
          </Link>
          <Link to="/order" className="nav-item">
            How to Order?
          </Link>
          <Link to="/about" className="nav-item">
            About Us
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </div>
        <div className="ham-holder">
          <SlBasket className="nav-icon" />
          <RxHamburgerMenu className="ham-menu-btn" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
