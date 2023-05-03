import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

function Project(props) {
    const { id, name, skills, image, alt } = props;
    return(
        <div className="project-container relative flex-col border border-black rounded-md p-4 hover:bg-gray-200">
          <h2 className="text-3xl font-bold">{name}</h2>
          <figure className="w-full">
            <img src={image} alt={alt} />
          </figure>
          <div className="project-info mb-20">
            <ul className="flex flex-wrap py-2 mb-5">
              {skills.map((skill, index) => {
                return (
                  <li
                    className="text-xs uppercase font-light bg-gray-50 rounded-md px-2 py-1 mb-1 mx-1"
                    key={index}
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
            </div>
            <Link
              to={`/details/${id}`}
              className="absolute bottom-0 left-2 bg-white border border-black font-light rounded-md px-4 py-2 m-5 hover:bg-black hover:text-white"
            >
              View Project
            </Link>
          </div>
    )
}

export default Project;
