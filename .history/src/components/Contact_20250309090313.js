// src/components/Contact.js
import React from "react";
import "./Contact.css";
import contactImage from "../assets/images/contact.webp";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div
        className="contact-left"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>
      <div className="contact-right">
        <div className="contact-content">
          <h2>How Can We Help You Succeed?</h2>
          <p>
            Whatever challenges you're facing, we're here to provide expert
            solutions that drive results. Let’s turn obstacles into
            opportunities together.
          </p>
          <a
            href="mailto:info@gammaspectre.com.ng"
            className="contact-button"
            aria-label="Send an email to Gamma Spectre Solutions"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
