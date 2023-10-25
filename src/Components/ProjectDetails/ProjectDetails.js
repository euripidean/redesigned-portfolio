import React from "react";
import { useParams } from "react-router";
import data from "../../work-data.js";
import "./ProjectDetails.css";

function ProjectDetails(props) {
  const params = useParams();
  const { id } = params;

  const { name, description, skills, image, alt, link, details, outcome } =
    data[id];

  return (
    <section>
      <div>
        <h1>{name}</h1>
        <h3>{description}.</h3>
        {link.includes("github") ? (
          <a href={link} target="_blank" rel="noreferrer">
            GitHub <i></i>
          </a>
        ) : (
          <a href={link} target="_blank" rel="noreferrer">
            View Live
          </a>
        )}

        <figure>
          <img src={image} alt={alt} />
        </figure>
        <div>
          <ul>
            {skills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
          {skills.slice(0, 3).map((skill, index) => {
            return (
              <div key={index}>
                <h3>{skill}</h3>
                <p>{details[index]}</p>
              </div>
            );
          })}
          {outcome && (
            <>
              <h3>Outcome</h3>
              <p>{outcome}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
