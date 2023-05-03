import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

function Project(props) {
    const { id, name, description, skills, image, alt } = props;
    return(
        <div className="project-container relative mt-6 flex-col bg-gray-50 md:bg-white md:border md:border-black rounded-md p-4 md:hover:bg-gray-50">
          <h2 className="text-3xl font-bold">{name}</h2>
          <h3 className="text-md text-gray-700">{description}</h3>
          <figure className="w-full mt-5 ">
            <img className="h-[300px] w-full object-cover object-top" src={image} alt={alt} />
          </figure>
          <div className="project-info mb-20">
            <ul className="flex flex-wrap py-2 md:mb-5">
              {skills.map((skill, index) => {
                return (
                  <li
                    className="text-xs border border-black uppercase font-light bg-gray-100 rounded-md px-2 py-1 mb-1 mx-1"
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
              className="absolute w-[90%] m-auto bottom-12 text-center bg-black text-white md:bg-white border md:bottom-2 md:left-0 md:w-auto md:text-left md:text-black md:border-black font-light rounded-md px-4 py-2 md:m-5 md:hover:bg-black md:hover:text-white"
            >
              View Project
            </Link>
          </div>
    )
}

export default Project;
