import React from "react";
import './Footer.css';
import { useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();
    return (
        <footer className="md:p-8 h-40 flex flex-col items-center 3xl:pb-5 3xl:mt-0">
            { location.pathname !== "/contact" && (
                <div className="footer-links space-x-8">
                <a href="https://www.linkedin.com/in/jxharrison" aria-label="View Jane's LinkedIn Profile" target="_blank" rel="noreferrer"><i className="text-gray-700 fab fa-linkedin text-5xl hover:scale-125 hover:text-black"></i></a>
                <a href="https://github.com/euripidean" aria-label="Visit Jane's GitHub Profile" target="_blank" rel="noreferrer"><i className="text-gray-700 fab fa-github text-5xl hover:scale-125 hover:text-black"></i></a>
                <a href="mailto:jxharrison@hotmail.com" aria-label="Send Jane an email"><i className="text-gray-700 fa-regular fa-envelope text-5xl hover:scale-125 hover:text-black"></i></a>
                </div>
            )
}
            
            <p className="text-sm w-full text-center text-gray-700 md:w-[66%] p-8">I live and work in the unceded territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ/Selilwitulh (Tsleil-Waututh) Nations.</p>
        </footer>
    );
}

export default Footer;
