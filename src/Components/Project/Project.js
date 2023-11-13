import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

function Project(props) {
  const { id, name, description, skills, image, alt } = props;
  return (
    <div className="project">
      <h2>{name}</h2>
      <h3>{description}</h3>
      <figure>
        <img src={image} alt={alt} />
      </figure>
      <div>
        <ul>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
      <Link to={`/details/${id}`}>View Project</Link>
    </div>
  );
}

export default Project;
