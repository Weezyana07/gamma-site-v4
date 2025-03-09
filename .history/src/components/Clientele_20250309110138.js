// src/components/Clientele.js
import React from "react";
import "./Clientele.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import copslogo from "../assets/images/copslogo.webp";
import copsagro from "../assets/images/copsagro.webp";
import minsedulogo from "../assets/images/minsedulogo.webp";
import waveline from "../assets/images/waveline.webp";
import sacsol from "../assets/images/SACSOL.webp";
import leading from "../assets/images/Leading.webp";
import kebbi from "../assets/images/kebbi.webp";
import obsidian from "../assets/images/obsidian.webp";

const clienteleData = [
  {
    name: "COPs Limited",
    image: copslogo,
  },
  {
    name: "COPs Agro Limited",
    image: copsagro,
  },
  {
    name: "Federal Ministry of Education",
    image: minsedulogo,
  },
  {
    name: "Waveline Resources",
    image: waveline,
  },
  {
    name: "SACSOL Engineering Limited",
    image: sacsol,
  },
  {
    name: "Leading Diagonal Engineering Limited",
    image: leading,
  },
  {
    name: "Kebbi State Government",
    image: kebbi,
  },
  {
    name: "Obsidian Trade Limited",
    image: obsidian,
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

const Clientele = () => {
  return (
    <section className="clientele">
      {/* <div className="clientele-background">
      </div> */}
      <div className="clientele-carousel-container">
        <h2>Our Clientele</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {clienteleData.map((client, index) => (
            <div key={index} className="clientele-card">
              <div className="clientele-image-container">
                <img
                  src={client.image}
                  alt={client.name}
                  className="clientele-image"
                />
              </div>
              <div className="clientele-info">
                <h3>{client.name}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Clientele;
