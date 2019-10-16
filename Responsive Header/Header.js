import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <a href="" className="logo">
          Saad Pasta
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">Projects</a>
          </li>
          <li>
            <a href="#careers">Open Source</a>
          </li>
          <li>
            <a href="#contact">Blogs</a>
          </li>
          <li>
            <a href="#contact">Hire Me</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
