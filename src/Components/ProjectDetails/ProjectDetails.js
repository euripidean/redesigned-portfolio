import React from "react";
import { useParams } from "react-router-dom";
import data from "../../work-data.js";
import "./ProjectDetails.css";

function ProjectDetails(props) {
   // Get the id from data
    const { id } = useParams();
    console.log(`Here's the ID: ${id}`)// convert string to number
    const { name, description, skills, link, image, alt, details } = data[id];
    return(
        <section>
            <div className="project-container">
                <div className="project-image">
                    <img src={image} alt={alt} />
                </div>
                <div className="project-description">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h3>Skills</h3>
                    <ul>
                        {skills.map((skill, index) => {
                            return <li key={index}>{skill}</li>
                        })}
                    </ul>
                    <p>{link}</p>
                    <h3>Details</h3>
                    <ul>
                        {details.map((detail, index) => {
                            return <li key={index}>{detail}</li>
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProjectDetails;
