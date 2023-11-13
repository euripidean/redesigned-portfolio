import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [nextClicked, setNextClicked] = useState(false);
  const [text, setText] = useState("Oh hello!");
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount === 0) {
      setText("I'm euripidean.");
    } else if (clickCount === 1) {
      setText("I'm a software engineer.");
    } else {
      setText("Keep on clicking, I guess.");
    }
  };

  return (
    <section id="intro">
      <h1 className={nextClicked ? "fade-in" : ""}>{text}</h1>
      <button onClick={handleClick}>Next</button>
    </section>
  );
}

export default Home;
