import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h1>Get in touch</h1>
      <p>
        I'm always open to chat about collaboration, work opportunities and
        would be happy to answer any questions you might have!
      </p>
      <div>
        <div>
          <a
            href="https://www.linkedin.com/in/jxharrison"
            aria-label="View Jane's LinkedIn Profile"
            target="_blank"
            rel="noreferrer"
          >
            <i></i>
          </a>
          <p>jxharrison</p>
        </div>
        <div>
          <a
            href="https://github.com/euripidean"
            aria-label="Visit Jane's GitHub Profile"
            target="_blank"
            rel="noreferrer"
          >
            <i></i>
          </a>
          <p>@euripidean</p>
        </div>
        <div>
          <a
            href="mailto:jxharrison@hotmail.com"
            aria-label="Send Jane an email"
          >
            <i></i>
          </a>
          <p>Email Me</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
