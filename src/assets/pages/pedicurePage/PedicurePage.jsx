import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../servicePageCSS/ServicePage.css";
import { FaChevronDown } from "react-icons/fa6";

const PedicurePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, //délka animace
      offset: 100,    //kdy se animace spustí (px od spodku okna)
      once: true,     //spustí se jen jednou
    });
  }, []);

  return (
    <div className="pedicure-page">
      <section className="hero-section" data-aos="fade-up">
        <p className="service-label" data-aos="fade-up" data-aos-delay="100">
          Pedikúra
        </p>
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
          "Lehký krok s dokonalou péčí"
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
          Zdravé a upravené nohy jsou základem vašeho pohodlí i sebevědomí.
          Dopřejte jim regeneraci, relaxaci a krásu v jednom.
        </p>
      </section>

      <section className="gallery-section" data-aos="fade-up" data-aos-delay="400">
        <h2 className="gallery-title" data-aos="fade-up" data-aos-delay="500">
          Galerie
        </h2>

        <div className="gallery-grid">
          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="100"></div>
          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="200"></div>
          <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300"></div>
        </div>

        <div className="arrow-down" data-aos="fade-up" data-aos-delay="600">
          <FaChevronDown />
        </div>
      </section>
    </div>
  );
};

export default PedicurePage;