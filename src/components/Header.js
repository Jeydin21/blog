import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <Link to="/">
        <h1>Jeydin21</h1>
      </Link>
      <div className={`nav-icon ${showNav ? "open" : ""}`} onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav ${showNav ? "open" : ""}`}>
        <ul>
          <li>
            <h2>
              <Link to="/posts" onClick={toggleNav}>
                Posts
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/projects" onClick={toggleNav}>
                Projects
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/contact" onClick={toggleNav}>
                Contact
              </Link>
            </h2>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
