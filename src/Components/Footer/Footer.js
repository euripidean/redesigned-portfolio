import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="mb-15 p-8 h-40 flex flex-col items-center">
            <div className="footer-links space-x-8">
            <a href="https://www.linkedin.com/in/jxharrison" target="_blank" rel="noreferrer"><i className="text-gray-700 fab fa-linkedin text-5xl hover:scale-125 hover:text-black"></i></a>
            <a href="https://github.com/euripidean" target="_blank" rel="noreferrer"><i className="text-gray-700 fab fa-github text-5xl hover:scale-125 hover:text-black"></i></a>
            <a href="https://www.instagram.com/euripidean/" target="_blank" rel="noreferrer"><i className="text-gray-700 fab fa-instagram text-5xl hover:scale-125 hover:text-black"></i></a>
            </div>
            <p className="text-sm text-center text-gray-700 w-[66%] p-8">I live and work in the unceded territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ/Selilwitulh (Tsleil-Waututh) Nations.</p>
        </footer>
    );
}

export default Footer;
