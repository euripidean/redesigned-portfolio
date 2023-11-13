import React, { useState } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import data from "../../work-data.js";
import "./ProjectDetails.css";

function ProjectDetails(props) {
  const params = useParams();
  const { id } = params;

  const { name, description, skills, image, alt, link, details, outcome } =
    data[id];

  // State to track the open/closed state of each accordion
  const [accordionOpen, setAccordionOpen] = useState(
    Array(skills.length).fill(false)
  );

  // Function to toggle the state of a specific accordion
  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section id="detail">
      <div>
        <h1 className="project-name">{name}</h1>
        <h3>{description}.</h3>
        {link.includes("github") ? (
          <a className="button" href={link} target="_blank" rel="noreferrer">
            GitHub <i></i>
          </a>
        ) : (
          <a className="button" href={link} target="_blank" rel="noreferrer">
            View Live
          </a>
        )}

        <figure>
          <img src={image} alt={alt} />
        </figure>
        <div>
          <ul className="skills">
            {skills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
          <div className="skill-detail-box">
            {skills.map((skill, index) => {
              return (
                <div
                  className={`skill ${accordionOpen[index] ? "open" : ""}`}
                  key={index}
                >
                  <div
                    className="accordion-heading"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3>{skill}</h3>
                    <FontAwesomeIcon
                      icon={
                        accordionOpen[index] ? faChevronDown : faChevronRight
                      }
                      className="chevron-icon"
                    />
                  </div>
                  {accordionOpen[index] && <p>{details[index]}</p>}
                </div>
              );
            })}
          </div>
          {outcome && (
            <div className="outcome">
              <h3>Outcome</h3>
              <p>{outcome}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
