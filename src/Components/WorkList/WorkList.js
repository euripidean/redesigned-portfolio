import React from "react";
import Project from "../Project/Project.js";
import data from "../../work-data.js";
import "./WorkList.css";

function Work() {
  const projects = data.map((project, i) => {
    const { name, description, skills, link, image, alt } = project;
    return (
      <Project
        key={i}
        id={i}
        name={name}
        description={description}
        skills={skills}
        link={link}
        image={image}
        alt={alt}
      />
    );
  });

  return (
    <section id="work">
      <h1>Projects</h1>
      <div>{projects}</div>
    </section>
  );
}

export default Work;
