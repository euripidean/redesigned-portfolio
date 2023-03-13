import React from "react";
import './Header.css';

function Header() {
    return (
    <header>
        <nav>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div className="intro">
            <h1>Hi, I'm Jane </h1>
            <section className="intro-text">
            <p> <strong>Nice to meet you!</strong> I'm a trainee Software Engineer.<br /> I'm currently part of the Dev Degree program at <strong>Shopify</strong>.
            </p>
            </section>
            <section className="intro-text">
            <p>I'm a career changer and ran <strong>ticketing operations and box offices</strong> for theatres and events for almost 15 years before starting my development journey.</p>
            </section>
            <section className="intro-text">
            <p>Originally from <strong>Yorkshire</strong> in the UK, I've lived in <strong>Vancouver, BC</strong> since 2015.</p>
            </section>
            <div className="spacer"></div>
            <div className="github-img">
                <img src="https://avatars.githubusercontent.com/u/33559193?v=4" alt="Jane's profile" className="avatar"/>
                </div>

        </div>
    </header>
    );

}

export default Header;
