import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navToggle = () => {
    // const menuBtn = document.getElementById("menuBtn");
    // const menu = document.getElementById("menu");
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header id="top">
      <nav id="site-menu" exact="true">
        <div>
          <button id="menuBtn" type="button" onClick={navToggle}></button>
        </div>
        <div id="menu">
          {location.pathname !== "/" && (
            <NavLink exact to="/">
              home
            </NavLink>
          )}
          <NavLink to="/work">work</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
