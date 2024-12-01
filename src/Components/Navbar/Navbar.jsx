import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="nav">
      <div className="nav-logo">
        Sound<span className="logo-highlight">IQ</span>
      </div>

      <div
        className={`nav-hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li className={isActive("/predictions") ? "active" : ""}>
          <Link to="/predictions" onClick={() => setIsMenuOpen(false)}>
            Predictions
          </Link>
        </li>
        <li
          className={`nav-contact ${
            isActive("/retrain-model") ? "active" : ""
          }`}
        >
          <Link to="/retrain-model" onClick={() => setIsMenuOpen(false)}>
            Retrain Model
          </Link>
        </li>
      </ul>

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className={isActive("/predictions") ? "active" : ""}>
            <Link to="/predictions" onClick={() => setIsMenuOpen(false)}>
              Predictions
            </Link>
          </li>
          <li className={isActive("/retrain-model") ? "active" : ""}>
            <Link to="/retrain-model" onClick={() => setIsMenuOpen(false)}>
              Retrain Model
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
