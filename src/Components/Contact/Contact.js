import React from "react";
import './Contact.css';

function Contact() {
    return (
        <section className="container flex-col pt-20 md:max-w-[66%] md:pt-0 max-w-[900px] md:mb-8" id="contact">
        <h1 className="text-5xl font-black mb-5">Get in touch</h1>
        <p className="text-2xl font-light">I'm always open to chat about collaboration, work opportunities and would be happy to answer any questions you might have!</p>
        <div className="flex flex-col items-center space-y-8 md:space-y-0 md:grid md:gap-8 md:grid-cols-3 h-72">
        <div className="flex flex-col items-center my-auto hover:scale-125">
        <a href="https://www.linkedin.com/in/jxharrison" target="_blank" rel="noreferrer"><i className="text-black fab fa-linkedin text-8xl "></i></a>
        <p className="text-xl font-bold">jxharrison</p>
        </div>
        <div className="flex flex-col items-center my-auto hover:scale-125">
        <a href="https://github.com/euripidean" target="_blank" rel="noreferrer"><i className="text-black fab fa-github text-8xl"></i></a>
        <p className="text-xl text-center font-bold">@euripidean</p>
        </div>
        <div className="flex flex-col items-center my-auto hover:scale-125">
        <a href="mailto:jxharrison@hotmail.com"><i className="fa-regular text-8xl fa-envelope"></i></a>
        <p className="text-xl font-bold">Email Me</p>
        </div>
        </div>     
    
        </section>
    )
}

export default Contact;
