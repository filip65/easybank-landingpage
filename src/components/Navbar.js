import React, { useRef, useState } from "react";
import "../css/navbar.css";

import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const openNavbar = () => {
    navbarRef.current.classList.add("mobile-navbar-opened");
    navbarRef.current.classList.remove("mobile-navbar-closed");
    setIsNavbarOpen(true);
  };

  const closeNavbar = () => {
    navbarRef.current.classList.remove("mobile-navbar-opened");
    navbarRef.current.classList.add("mobile-navbar-closed");
    setIsNavbarOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-wraper">
        <img src={logo} alt="logo" />

        <button className="toggle-btn toggle-btn-open" onClick={openNavbar}>
          <img src={hamburger} alt="navbar toggle icon" />
        </button>

        <button className="toggle-btn toggle-btn-close" onClick={closeNavbar}>
          <img src={closeIcon} alt="navbar toggle icon" />
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
