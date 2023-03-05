import React from "react";
import './Header.css';

function Header() {
    return (
    <div className="header">
        <h1>Jane Harrison</h1>
        <h2>Full Stack Web Developer</h2>
        <nav>
            <ul>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
    );

}

export default Header;
