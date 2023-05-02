import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

function Project(props) {
    const { name, description, skills, link, image, alt } = props;
    return(
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
                <Link to={link}>View Project</Link>
            </div>
        </div>
    )
}

export default Project;
