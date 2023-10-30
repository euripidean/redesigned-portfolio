import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./Home.css";

function Home() {
  const [nextClicked, setNextClicked] = useState(false);
  const [text, setText] = useState("Hi, I'm euripidean");

  return (
    <section id="intro">
      <h1 className={nextClicked ? "fade-in" : ""}>{text}</h1>
      <Button>Here is some button text</Button>
    </section>
  );
}

export default Home;
