import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

function Contact() {
  return (
    <section id="about">
      <h1>Get in touch</h1>
      <p>
        I'm always open to chat about collaboration, work opportunities, and
        would be happy to answer any questions you might have!
      </p>
      <div className="contact">
        <div className="contact-item">
          <a
            href="https://www.linkedin.com/in/jxharrison"
            aria-label="View Jane's LinkedIn Profile"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          </a>
          <p>jxharrison</p>
        </div>
        <div className="contact-item">
          <a
            href="https://github.com/euripidean"
            aria-label="Visit Jane's GitHub Profile"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          </a>
          <p>@euripidean</p>
        </div>
        <div className="contact-item">
          <a
            href="mailto:jxharrison@hotmail.com"
            aria-label="Send Jane an email"
          >
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          </a>
          <p>Email Me</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
