import React, { useRef } from "react";
import "../css/navbar.css";

import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

const Navbar = () => {
  const navbarRef = useRef(null);

  const toggleNavbar = (e) => {
    if (navbarRef.current.classList.contains("mobile-navbar-opened")) {
      navbarRef.current.classList.remove("mobile-navbar-opened");
      navbarRef.current.classList.add("mobile-navbar-closed");
    } else {
      navbarRef.current.classList.add("mobile-navbar-opened");
      navbarRef.current.classList.remove("mobile-navbar-closed");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-wraper">
        <img src={logo} alt="logo" />
        <button className="toggle-btn" onClick={toggleNavbar}>
          <img src={hamburger} alt="navbar toggle icon" />
        </button>
      </div>
      <div
        className="mobile-navbar mobile mobile-navbar-closed"
        ref={navbarRef}
      >
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Careers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
