import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo-home.png";

import "./Header.css";

const Header = () => {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const currentPath = window.location.pathname;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsNavScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsNavScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-wrapper ${isNavScrolled ? "sticky-nav" : ""}`}>
      <div className="logo">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className={isNavScrolled ? "logo-small" : ""}
          />
        </a>
      </div>
      <button
        className="mobile-nav-toggle"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        aria-controls="primary-navigation"
        aria-expanded={isMobileNavOpen}
      >
        <img
          className="icon-hamburger"
          src="images/icon-hamburger.png"
          alt="Menu"
        />
      </button>
      <nav
        id="primary-navigation"
        className={`primary-navigation ${isMobileNavOpen ? "open" : "closed"}`}
        tabIndex={isMobileNavOpen ? 0 : -1}
      >
        <ul className="nav-list">
          <li>
            <a
              href="/"
              className={`nav-link ${currentPath === "/" ? "active" : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/services"
              className={`nav-link ${
                currentPath === "/services" ? "active" : ""
              }`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`nav-link ${currentPath === "/about" ? "active" : ""}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={`nav-link ${
                currentPath === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </a>
          </li>{" "}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
