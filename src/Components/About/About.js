import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="intro">
      <h1>
        <span>ey up</span> /əyˈ uh-p/{" "}
      </h1>
      <h2>
        {` { `}
        <strong>'hello'</strong> in Yorkshire {`}`}
      </h2>
      <p>
        I'm <strong>Jane</strong>. I'm a Yorkshire-born, Vancouver-living former
        ticketing manager now enrolled in the <strong>Dev Degree</strong>{" "}
        program with Shopify.
      </p>
      <figure>
        <img src="./images/York.jpg" alt="York Minster" />
      </figure>
      <p>
        As I study Applied Computer Science and complete Internship placements,
        I'm looking to develop skills as a Full-Stack Developer and ultimately
        specialize in data-focused engineering.
      </p>
      <h2>Recent Work Experience</h2>
      <section>
        <div>
          <figure>
            <img src="./images/shopify.svg" alt="Shopify Logo" />
          </figure>
          <p>Dev Degree Intern</p>
          <p>Aug '22 - Present</p>
          <ul>
            <li>
              Completed intensive Training Path, learning HTML, CSS, JavaScript,
              React, Ruby on Rails and MySQL
            </li>
            <li>
              Joined Core Product Optimize Team within the Analyze sub-team for
              first placement
            </li>
            <li>Most recent impact review in the High Positive category</li>
          </ul>
        </div>
        <div>
          <figure>
            <img src="./images/VIFFLogo.png" alt="VIFF Logo" />
          </figure>
          <p>Ticketing and CRM Manager</p>
          <p>Aug '16 - Aug '22</p>
          <ul>
            <li>
              Led-project to host the 2020 festival online via VIFF Connect
            </li>
            <li>
              Project-managed infrastucture update 2021-22, resulting in a new
              ticketing system, website and CRM.
            </li>
            <li>Senior Manager in the organization</li>
          </ul>
        </div>
      </section>
      {/* <h2>Skills</h2> */}
    </section>
  );
};

export default About;
