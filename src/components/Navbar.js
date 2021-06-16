import React, { useRef, useState, useEffect } from "react";
import "../css/navbar.css";

import logo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

const Navbar = () => {
  const navbarRef = useRef(null);
  const openBtn = useRef(null);
  const closeBtn = useRef(null);
  const mobileNavbar = useRef(null);

  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  const toggleNavbar = () => {
    let state = navbarRef.current.classList.contains("navbar-closed");

    if (state) {
      navbarRef.current.classList.remove("navbar-closed");
      navbarRef.current.classList.add("navbar-opened");
      setIsNavbarOpened(true);
    } else {
      navbarRef.current.classList.add("navbar-closed");
      navbarRef.current.classList.remove("navbar-opened");
      setIsNavbarOpened(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (isNavbarOpened) {
        openBtn.current.style.display = "none";
        closeBtn.current.style.display = "block";
      } else {
        closeBtn.current.style.display = "none";
        openBtn.current.style.display = "block";
      }
    }, 500);

    setTimeout(() => {
      mobileNavbar.current.style.display = "none";
    }, 1500);
  }, [isNavbarOpened]);

  return (
    <div className="navbar navbar-closed" ref={navbarRef}>
      <div className="navbar-wrapper">
        <img src={logo} alt="logo" />
        <button
          className="toggle-btn toggle-btn-open"
          onClick={toggleNavbar}
          ref={openBtn}
        >
          <img src={hamburgerIcon} alt="" />
        </button>
        <button
          className="toggle-btn toggle-btn-close"
          onClick={toggleNavbar}
          ref={closeBtn}
        >
          <img src={closeIcon} alt="" />
        </button>
      </div>

      <div className="mobile-navbar" ref={mobileNavbar}>
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
