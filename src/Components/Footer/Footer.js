import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-links">
            <a href="https://www.linkedin.com/in/jxharrison" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/euripidean" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
            <a href="https://www.instagram.com/euripidean/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
            </div>
            <p>© 2023 Jane Harrison</p>
        </footer>
    );
}

export default Footer;
