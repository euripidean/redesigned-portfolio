import React from "react";
import "./Home.css";

function Home() {
  return (
    //
    <section id="intro">
      <div>
        <figure>
          <img src="./images/profile.jpeg" alt="Jane" />
        </figure>
        <div>
          <h1>
            Hi, I'm <span>Jane</span>.
          </h1>
          <p>
            I solve problems using <span>code</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
