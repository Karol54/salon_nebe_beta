import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../servicePageCSS/ServicePage.css";
import { FaChevronDown } from "react-icons/fa6";

const ManicurePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, //délka animace (v ms)
      offset: 100, //vzdálenost od spodního okraje, kdy se animace spustí
      once: true, //animace se spustí jen jednou
    });
  }, []);

  return (
    <div className="manicure-page">
      <section className="hero-section" data-aos="fade-up">
        <p className="service-label" data-aos="fade-up" data-aos-delay="100">
          Manikúra
        </p>
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
          "Krása začíná u rukou"
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
          Ruce o nás prozradí víc, než si myslíme. Dopřejte jim péči, kterou si
          zaslouží – s důrazem na zdraví, jemnost a eleganci.
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

        <div className="arrow-down" data-aos="fade-up" data-aos-delay="500">
          <FaChevronDown />
        </div>
      </section>
    </div>
  );
};

export default ManicurePage;