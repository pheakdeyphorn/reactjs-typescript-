import React from "react";
import "./style.css";

const Nav: React.FC = () => {
  return (
    <nav>
      <a href="" className="logo">
        Food App
      </a>
      <ul className="menu-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
