import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="toggle-button"
        onClick={toggleSidebar}
        style={{ color: isOpen ? "var(--background" : "var(--link-color" }}
      >
        {isOpen ? "✕" : "MENU"}
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            {location.pathname !== "/" && (
              <NavLink
                className={`menuItem ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                exact
                to="/"
              >
                Home
              </NavLink>
            )}
            <NavLink
              className={`menuItem ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to="/work"
            >
              Work
            </NavLink>
            <NavLink
              className={`menuItem ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={`menuItem ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
