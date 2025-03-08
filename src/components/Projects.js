// src/components/Projects.js
import React from "react";
import "./Projects.css";
import export1 from "../assets/images/export.jpeg"; // Example image path
import export2 from "../assets/images/export2.jpg";
import paliative from "../assets/images/paliative.jpeg";
import paliative1 from "../assets/images/paliative1.jpeg";
import recircle from "../assets/images/recircle.jpeg";
import recircle2 from "../assets/images/recircle2.jpeg";
import road from "../assets/images/road.jpeg";
import cons from "../assets/images/const.jpeg";
import rapel from "../assets/images/rapel.jpg";
import rapel1 from "../assets/images/rapel1.jpeg";
import project3 from "../assets/images/project3.jpeg";
import perimeter from "../assets/images/perimeter.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const projects = [
  {
    title: "COVID19 Paliative",
    description: "Supply for covid19 Palliative",
    image: paliative1,
    link: "/projects/#",
  },
  {
    title: "COVID19 Paliative",
    description: "Supply for covid19 Palliative",
    image: paliative,
    link: "/projects/#",
  },
  {
    title: "Export of Grains",
    description: "Export of grains to a client",
    image: export1,
    link: "/projects/#",
  },
  {
    title: "Export of Grains",
    description: "Export of grains to a client",
    image: export2,
    link: "/projects/#",
  },
  {
    title: "Accomodation Project",
    description: "22 rooms Accomodation Project for a client",
    image: project3,
    link: "/projects/#",
  },
  {
    title: "Rappel Project",
    description: "Rappelling Tower Project for a client",
    image: rapel1,
    link: "/projects/#",
  },
  {
    title: "Rappel Project",
    description: "Rappelling Tower Project for a client",
    image: rapel,
    link: "/projects/#",
  },
  {
    title: "Perimeter Project",
    description: "Perimeter fencing for a client",
    image: perimeter,
    link: "/projects/#",
  },
  {
    title: "Road Construction",
    description: "Construction of a road for a client",
    image: road,
    link: "/projects/#",
  },
  {
    title: "Road Construction",
    description: "Construction of a road for a client",
    image: cons,
    link: "/projects/#",
  },
  {
    title: "Reclircling Plant",
    description: "Construction and setting of a recircle plant",
    image: recircle2,
    link: "/projects/#",
  },
  {
    title: "Reclircling Plant",
    description: "Construction and setting of a recircle plant",
    image: recircle,
    link: "/projects/#",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
      >
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* <a href={project.link} className="view-more">
                VIEW MORE
              </a> */}
            </div>
          </div>
        ))}
      </Carousel>
      {/* <a href="#" className="view-more">
        VIEW MORE
      </a> */}
    </section>
  );
};

export default Projects;
