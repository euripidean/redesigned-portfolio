import React from "react";
import { useParams } from "react-router";
import data from "../../work-data.js";

function ProjectDetails(props) {
    const params = useParams();
    const { id } = params

    const { name, description, skills, image, alt, link, details, outcome } = data[id]

    return (
        <section className="container flex-col pt-20 md:max-w-[90%] md:pt-0">
        <div className="project-details-container flex flex-col">
            <h1 className="text-5xl font-bold mt-5">{name}</h1>
            <h3 className="text-md text-gray-700">{description}.</h3>
            {/* If the link contains the word github, put a button saying 'view on github' and link to the github page. Otherwise, put a button saying 'view live' and link to the live page. */}
            {link.includes("github") ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[90%] m-auto text-center bg-black text-white border md:w-auto md:font-light md:text-right md: mr-0 md:text-xl rounded-md px-4 py-2 md:group-hover:bg-white md:group-hover:text-black"
                >
                    GitHub <i className="ml-2 text-2xl fab fa-github text-white"></i>
                </a>
            ) : (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[90%] m-auto text-center bg-black text-white border md:w-auto md:font-light md:text-right md: mr-0 md:text-xl rounded-md px-4 py-2 md:hover:bg-black md:hover:text-white"
                >
                    View Live
                </a>
            )}

            <figure className="w-full mt-5">
                <img className="md:max-h-[750px] w-full object-cover object-top" src={image} alt={alt} />
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
                    }
                    )}
                </ul>
                {skills.slice(0, 3).map((skill, index) => {
                    return (
                        <div key={index}>
                            <h3 className="text-3xl font-bold mb-2">{skill}</h3>
                            <p className="text-lg font-light p-4">{details[index]}</p>
                        </div>
                    )
                })}
                {outcome && (
                    <>
                    <h3 className="text-3xl font-bold mb-2">Outcome</h3>
                    <p className="text-lg font-light p-4">{outcome}</p>
                    </>
                )}
            </div>
        </div>
        </section>
    );
}

export default ProjectDetails;
