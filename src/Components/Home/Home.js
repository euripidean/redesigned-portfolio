import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { SidebarContext } from "../../SidebarContext";
import "./Home.css";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Oh hello!");
  const [clickCount, setClickCount] = useState(0);
  const { toggleSidebar } = useContext(SidebarContext);

  // Messages to display when the user clicks the scroll down button or scrolls
  const messages = [
    "I'm euripidean.",
    "I'm a software engineer.",
    "Feel free to take a look around!",
  ];

  const handleClick = () => {
    if (clickCount < 3) {
      console.log(clickCount);
      document.querySelector(".click-me").classList.add("hidden");
      setText(messages[clickCount]);
      setClickCount(clickCount + 1);
    } else {
      document.querySelector(".click-me").classList.add("hidden");
      toggleSidebar(isOpen, setIsOpen);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".click-me").classList.remove("hidden");
    }, 2000);
  }, [text]);

  return (
    <section id="intro">
      <div className="middle">
        <h1 className={"intro-text"}>{text}</h1>
      </div>
      <div className="click-me hidden">
        <button className="button" onClick={handleClick}>
          click me
        </button>
      </div>
    </section>
  );
}

export default Home;
