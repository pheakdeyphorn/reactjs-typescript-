import React from "react";
import "./Nav.css";

const menuList = [
  {
    link: "#home",
    label: "Home",
  },
  {
    link: "#menu",
    label: "Menu",
  },
  {
    link: "#contact",
    label: "Contact",
  },
];

const Nav: React.FC = () => {
  return (
    <nav>
      <a href="" className="logo">
        Food App
      </a>
      <ul className="menu-lists">
        {menuList.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
