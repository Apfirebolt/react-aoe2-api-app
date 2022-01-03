import React from "react";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  return (
    <nav>
      <p className="brand">Star Wars API</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/civilizations">Civilizations</Link>
        </li>
        <li>
          <Link to="/units">Units</Link>
        </li>
        <li>
          <Link to="/technologies">Technologies</Link>
        </li>
        <li>
          <Link to="/structures">Structures</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
