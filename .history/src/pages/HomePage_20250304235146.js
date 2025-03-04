import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./HomePage.css";

const Services = lazy(() => import("../components/Services"));
const Industries = lazy(() => import("../components/Industries"));
const Projects = lazy(() => import("../components/Projects"));
const Clientele = lazy(() => import("../components/Clientele"));
const Contact = lazy(() => import("../components/Contact"));

<Helmet>
  <title>Gamma Spectre - Transforming Businesses with Technology</title>
  <meta
    name="description"
    content="Unlocking business potential through IT, consultancy, and innovation."
  />
</Helmet>;

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-header">
        <div className="top-image"></div>
        <div className="mid-text">
          <p>
            At <strong>GAMMA SPECTRE</strong>, we specialize in providing
            comprehensive consultancy, information technology, and general
            solutions tailored to meet the diverse needs of our clients. With a
            deep understanding of industry trends and technological
            advancements, our team of experts collaborates closely with
            businesses to unlock their full potential and drive sustainable
            growth.
          </p>
        </div>
        <div className="bottom-image"></div>
        <section>
          <div className="welcome">
            <h1 className="hero-title">Unlocking Potential:</h1>
            <h2 className="hero-subtitle">
              Transforming Businesses with Technology and Insight.
            </h2>
          </div>
        </section>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
        <Industries />
        <Projects />
        <Clientele />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
