import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import aboutImg from "../assets/images/about.webp";
import missionImg from "../assets/images/mission.webp";
import wils from "../assets/images/wils.webp";
import mfon from "../assets/images/mfon2.webp";
import ibr from "../assets/images/ibr4.webp";
import fahad from "../assets/images/fahad.webp";
import luchi from "../assets/images/luchi.webp";
import cosby from "../assets/images/cosby.webp";
import sanusi from "../assets/images/Sanusi.webp";
import anas from "../assets/images/anas.webp";
import emma from "../assets/images/emma.webp";
import juan from "../assets/images/juan.webp";
import gammaImage from "../assets/images/gamma.webp";
import "./AboutPage.css";
// import "./About.css";

const teamMembers = [
  { name: "Ibrahim S. Nayaya", img: ibr, role: "MD/CEO" },
  { name: "Wil's Akpan", img: wils, role: "Director" },
  { name: "Emmanuel Olorunhundo", img: emma, role: "Director" },
  { name: "Cosby Ibanga", img: cosby, role: "Head of Operation" },
  { name: "Victoria Onugha", img: luchi, role: "Head of PR" },
  { name: "Mfon Akpabio (PhD)", img: mfon, role: "Head of HR" },
  { name: "Sanusi Rabbunallah", img: sanusi, role: "Head of Engineering" },
  {
    name: "Juan Gutierrez",
    img: juan,
    role: "Business Consultant & Strategist",
  },
  { name: "Fahad Abdulkadir", img: fahad, role: "Head of IT" },
  { name: "Anas Tafida", img: anas, role: "Head of Logistics" },
];

const About = () => {
  return (
    <div className="">
      <Helmet>
        <title>About Us | Gamma Spectre</title>
        <meta
          name="description"
          content="Learn more about Gamma Spectre's mission and team."
        />
      </Helmet>
      <Header />
      <div className="about-header">
        <div className="about-container">
          {/* Text and Image Section */}
          <div className="about-text-and-image">
            <div className="about-container">
              <div className="about-text-section">
                <h1 className="about-title">GAMMA SPECTRE:</h1>
                <h2 className="about-subtitle">
                  Uniting Innovation with Purpose
                </h2>
              </div>
            </div>
            <div className="about-img-container">
              <div className="about-image-section">
                <img
                  src={gammaImage}
                  alt="company logo"
                  className="about-person-image"
                  aria-label="Company Logo"
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="about-description-section">
            <p className="about-description">
              Welcome to <strong className="highlight">GAMMA SPECTRE</strong>,
              where innovation meets passion. Founded 2022 we've been dedicated
              to providing cutting-edge solutions, revolutionizing industries.
              Our journey began with a simple vision: to transform the way
              businesses operate, enhance user experiences, by providing expert
              guidance.
            </p>
          </div>
        </div>
      </div>
      {/* Introductory Statement */}
      <section className="intro">
        <div className="containMain">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg text-gray-700 mt-4">
            Who we are and what drives us.
          </p>
          <div className="intro-section">
            <p>
              At <strong className="highlight">Gamma Spectre</strong>, we are a
              dynamic, forward-thinking company redefining excellence across
              consultancy, information technology, construction, manufacturing,
              and general contracting. Guided by innovation and adaptability, we
              deliver tailored solutions and cutting-edge services to meet the
              unique needs of our clients. With a highly skilled team and
              strategically positioned personnel, we ensure precision, speed,
              and efficiency in project delivery across Nigeria. We prioritize
              client satisfaction, working tirelessly to deliver results on time
              and within budget. Our commitment to excellence and innovation
              drives us to provide superior services and develop solutions that
              empower businesses to thrive.
            </p>
            <img src={aboutImg} alt="IT" className="it-img" />
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="containeMain">
          <div className="mission-vision-section">
            <div className="img-box">
              <img src={missionImg} alt="IT" className="mv-img" />
            </div>
            <div>
              <h1>Our Mission</h1>
              <p>
                At <strong className="highlight">Gamma Spectre</strong>, our
                mission is to deliver exceptional solutions, services, and
                products in the fields of consultancy, information technology,
                construction, manufacturing, and general contracting. We are
                committed to enabling progress, improving communities, and
                providing value to our clients through innovative, high-quality,
                and reliable offerings.
              </p>
              <h1>Our Vision</h1>
              <p>
                Our vision at{" "}
                <strong className="highlight">Gamma Spectre</strong> is to be a
                dynamic and versatile leader in the business world, known for
                our ability to adapt and excel in a variety of sectors. We
                aspire to provide innovative solutions that drive economic
                growth, enhance technological capabilities, and foster
                sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="containMain">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value">
              <div className="icon-placeholder">🌟</div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in every aspect of our operations,
                upholding the highest standards of quality and performance.
              </p>
            </div>
            <div className="value">
              <div className="icon-placeholder">💡</div>
              <h3>Innovation</h3>
              <p>
                At the heart of what we do, we actively seek creative solutions
                to stay ahead of industry trends.
              </p>
            </div>
            <div className="value">
              <div className="icon-placeholder">🤝</div>
              <h3>Collaboration</h3>
              <p>
                We value partnerships with clients, experts, and industry peers
                to achieve success.
              </p>
            </div>
            <div className="value">
              <div className="icon-placeholder">🔒</div>
              <h3>Integrity</h3>
              <p>
                Transparency and ethical conduct define all our business
                interactions.
              </p>
            </div>
            <div className="value">
              <div className="icon-placeholder">🛡️</div>
              <h3>Safety</h3>
              <p>
                We prioritize the safety of our employees and stakeholders in
                every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="text-lg text-gray-700 mt-2">
            The people behind our success.
          </p>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-photo-placeholder">
                  <img src={member.img} alt={member.name} loading="lazy" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
