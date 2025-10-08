import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../servicePageCSS/ServicePage.css";
import { FaInstagram, FaGlobe } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

import one from "../../../assets/image/one.jpg";
import two from "../../../assets/image/two.jpg";
import tree from "../../../assets/image/tree.jpg";
import four from "../../../assets/image/four.jpg";
import five from "../../../assets/image/five.jpg";
import six from "../../../assets/image/six.jpg";
import seven from "../../../assets/image/seven.jpg";
import eight from "../../../assets/image/eight.jpg";
import nine from "../../../assets/image/nine.jpg";
import ten from "../../../assets/image/ten.jpg";

const CosmeticPage = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // 🔹 nově přidáno

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  const images = [one, two, tree, four, five, six, seven, eight, nine, ten];
  const visibleImages = showAll ? images : images.slice(0, 5);

  const handleShowMore = () => setShowAll(!showAll);

  return (
    <div className="cosmetic-page">
      <section className="hero-section" data-aos="fade-up">
        <p className="service-label" data-aos="fade-up" data-aos-delay="100">
          Kosmetické služby
        </p>
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
          "V přirozenosti je krása"
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
          Tímto mottem se řídím a u svých klientek se snažím zdůraznit jejich
          přirozenou krásu.
        </p>
        <p className="hero-follow" data-aos="fade-up" data-aos-delay="400">
          Moji práci ze salonu můžete sledovat také na:
        </p>
        <div className="social-icons" data-aos="zoom-in" data-aos-delay="500">
          <a
            href="https://www.instagram.com/cils_cosmetics"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://cilscosmetics.com"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a>
        </div>
      </section>

      <section className="gallery-section" data-aos="fade-up">
        <h2 className="gallery-title" data-aos="fade-up" data-aos-delay="100">
          Galerie
        </h2>
        <div className="gallery-grid">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{ backgroundImage: `url(${img})` }}
              onClick={() => setSelectedImage(img)} // 🔹 otevře modál
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            ></div>
          ))}
        </div>

        <div
          className="arrow-down"
          onClick={handleShowMore}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaChevronDown
            style={{
              transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          />
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Náhled" className="lightbox-img" />
        </div>
      )}
    </div>
  );
};

export default CosmeticPage;
