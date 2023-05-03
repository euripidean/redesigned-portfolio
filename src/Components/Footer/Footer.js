import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-links">
            <a href="https://www.linkedin.com/in/jxharrison" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/euripidean" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/euripidean/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
            <p>I live and work on the unceded territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ/Selilwitulh (Tsleil-Waututh) Nations.</p>
        </footer>
    );
}

export default Footer;
