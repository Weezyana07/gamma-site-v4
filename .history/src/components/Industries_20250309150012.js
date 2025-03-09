// src/components/Industries.js
import React, { useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import "./Industries.css";
import consulting from "../assets/images/Consulting.webp";
import information from "../assets/images/information.webp";
import manufacturing from "../assets/images/manufacturing.webp";
import construction from "../assets/images/Construction.webp";
import general from "../assets/images/General.webp";

const Industries = () => {
  const navigate = useNavigate();

  const handleNavigation = (hash) => {
    navigate(`/services${hash}`);
    setTimeout(() => {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  const industries = [
    {
      title: "Consultancy",
      description:
        "We offer specialised consultancy services to a wide range of industries, providing expert guidance and solutions for diverse challenges.",
      image: consulting,
      hash: "#consultancy",
    },
    {
      title: "Information Technology",
      description:
        "Our IT division excels in delivering cutting-edge technology solutions, including network infrastructure, software development, and telecom services.",
      image: information,
      hash: "#it",
    },
    {
      title: "Construction",
      description:
        "We offer specialised consultancy services to a wide range of industries, providing expert guidance and solutions for diverse challenges.",
      image: construction,
      hash: "#construction",
    },
    {
      title: "Manufacturing",
      description:
        "Our construction division is dedicated to the creation of quality infrastructures, from residential and commercial buildings to civil engineering projects.",
      image: manufacturing,
      hash: "#manufacturing",
    },
    {
      title: "General Contract",
      description:
        "Our IT division excels in delivering cutting-edge technology solutions, including network infrastructure, software development, and telecom services.",
      image: general,
      hash: "#contracts",
    },
  ];

  return (
    <section className="industries">
      <div className="containMain">
        <div className="industry-content">
          <h2>
            <span>Industries We Serve</span>
          </h2>
          <p className="industry-content-p">
            Delivering excellence across multiple sectors.
          </p>
          <div className="industry-cards">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="industry-image"
                />
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <button
                  key={index}
                  onClick={() => handleNavigation(industry.hash)}
                  hash
                  className="read-more"
                >
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Industries);
