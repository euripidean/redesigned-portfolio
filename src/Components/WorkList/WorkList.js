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
                id={`project-${i}`}
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
        <section className="container flex-col pt-20 md:max-w-[90%] md:pt-0" id="work">
            <h1 className="text-5xl font-bold mb-10">Projects</h1>
            <div className="flex-col lg:grid lg:gap-8 lg:grid-cols-2">
                {projects}
            </div>
        </section>
    );
}

export default Work;
