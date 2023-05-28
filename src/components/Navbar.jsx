import React from "react";
import { RiMovie2Fill } from "react-icons/ri";

const Navbar = (props) => {
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="logoText">
          <RiMovie2Fill className="logo" />
          CinemaPrime
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
