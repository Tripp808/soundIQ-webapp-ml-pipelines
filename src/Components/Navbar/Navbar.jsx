import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="nav">
      {/* Logo */}
      <div className="nav-logo">
        Sound<span className="logo-highlight">IQ</span>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`nav-hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/predictions" onClick={() => setIsMenuOpen(false)}>
            Predictions
          </Link>
        </li>
        <li className="nav-contact">
          <Link to="/retrain-model" onClick={() => setIsMenuOpen(false)}>
            Retrain Model
          </Link>
        </li>
      </ul>

      {/* Side Menu (Dropdown on smaller screens) */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/predictions" onClick={() => setIsMenuOpen(false)}>
              Predictions
            </Link>
          </li>
          <li className="nav-contact">
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
