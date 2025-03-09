// src/components/Industries.js
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Industries.css";
import consulting from "../assets/images/Consulting.png";
import information from "../assets/images/information.png";
import manufacturing from "../assets/images/manufacturing.png";
import construction from "../assets/images/Construction.png";
import general from "../assets/images/General.png";

const Industries = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const industries = [
    {
      title: "Consultancy",
      description:
        "We offer specialised consultancy services to a wide range of industries, providing expert guidance and solutions for diverse challenges.",
      image: consulting,
      link: "/services#consultancy",
    },
    {
      title: "Information Technology",
      description:
        "Our IT division excels in delivering cutting-edge technology solutions, including network infrastructure, software development, and telecom services.",
      image: information,
      link: "/services#it",
    },
    {
      title: "Construction",
      description:
        "We offer specialised consultancy services to a wide range of industries, providing expert guidance and solutions for diverse challenges.",
      image: construction,
      link: "/services#construction",
    },
    {
      title: "Manufacturing",
      description:
        "Our construction division is dedicated to the creation of quality infrastructures, from residential and commercial buildings to civil engineering projects.",
      image: manufacturing,
      link: "/services#manufacturing",
    },
    {
      title: "General Contract",
      description:
        "Our IT division excels in delivering cutting-edge technology solutions, including network infrastructure, software development, and telecom services.",
      image: general,
      link: "/services#contracts",
    },
  ];

  return (
    <section className="industries">
      <div className="industry-content">
        <p>
          <span>WHAT WE DO</span>
        </p>
        <h2>Industries and Sectors</h2>
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
              <Link to={industry.link} className="read-more">
                READ MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
