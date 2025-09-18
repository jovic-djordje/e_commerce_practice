import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import "./nav.style.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-holder">
        <p className="logo">E-commerce</p>
        <div className="nav-links">
          <Link to="/" className="nav-item">
            Pocetna
          </Link>
          <Link to="/offer" className="nav-item">
            Ponuda
          </Link>
          <Link to="/order" className="nav-item">
            Kako naruciti?
          </Link>
          <Link to="/about" className="nav-item">
            O nama
          </Link>
          <Link to="/contact" className="nav-item">
            Kontakt
          </Link>
        </div>
        <SlBasket className="nav-icon" />
      </div>
    </div>
  );
};

export default Navigation;
