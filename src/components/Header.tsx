import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Movie-APP</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/favoritelist">Favorite List</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
