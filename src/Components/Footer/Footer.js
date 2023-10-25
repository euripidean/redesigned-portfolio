import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  return (
    <footer>
      {location.pathname !== "/contact" && (
        <div>
          <a
            href="https://www.linkedin.com/in/jxharrison"
            aria-label="View Jane's LinkedIn Profile"
            target="_blank"
            rel="noreferrer"
          >
            <i></i>
          </a>
          <a
            href="https://github.com/euripidean"
            aria-label="Visit Jane's GitHub Profile"
            target="_blank"
            rel="noreferrer"
          >
            <i></i>
          </a>
          <a
            href="mailto:jxharrison@hotmail.com"
            aria-label="Send Jane an email"
          >
            <i></i>
          </a>
        </div>
      )}

      <p>
        I live and work in the unceded territories of the xʷməθkʷəy̓əm
        (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ/Selilwitulh
        (Tsleil-Waututh) Nations.
      </p>
    </footer>
  );
}

export default Footer;
