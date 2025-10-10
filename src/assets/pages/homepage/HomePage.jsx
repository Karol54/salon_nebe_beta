import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";

import salon from "../../image/salon.jpg";
import salon2 from "../../image/salon2.jpg";
import salon3 from "../../image/salon3.jpg";
import salon4 from "../../image/salon4.jpg";
import manikura from "../../image/manikura.png";
import pedikura from "../../image/pedikura.png";
import kosmeticke_sluzby from "../../image/kosmeticke_sluzby.png";

const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, //délka animace v ms
      offset: 100,    //kdy se animace spustí
      once: true,     //animace se spustí jen jednou
    });
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-text" data-aos="fade-right">
          <h1 data-aos="fade-up" data-aos-delay="200">Salon Nebe</h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Rády vás přivítáme v našem Salonu Nebe v Klimkovicích, kde se
            postaráme o vaši krásu a pohodu.
          </p>
          <p data-aos="fade-up" data-aos-delay="400">Rezervace na Notino:</p>
          <a
            href="https://www.notino.cz/salony/salon-nebe/?fbclid=PAZXh0bgNhZW0CMTEAAadeQlkUTiI_TypOXzm9r9Wt40lRXdOQ18lqUI9TI7G3XU7esAYqb3M9AzcBIQ_aem_D9r9_80rsX1AKmoAZf1flw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Rezervace
          </a>
        </div>

        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={salon} className="d-block w-100" alt="Salon Nebe" />
            </div>
            <div className="carousel-item">
              <img src={salon2} className="d-block w-100" alt="Salon 2" />
            </div>
            <div className="carousel-item">
              <img src={salon3} className="d-block w-100" alt="Salon 3" />
            </div>
            <div className="carousel-item">
              <img src={salon4} className="d-block w-100" alt="Salon 4" />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Předchozí</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Další</span>
          </button>
        </div>
      </section>

      <div className="line" data-aos="fade-up">
        <hr />
      </div>

      <section className="services-section" data-aos="fade-up">
        <h3 data-aos="fade-up">O NÁS</h3>
        <p data-aos="fade-up" data-aos-delay="200">Nabízíme širokou škálu služeb:</p>

        <div className="services">
          <div className="service" data-aos="zoom-in" data-aos-delay="100">
            <img className="manikura" src={manikura} alt="Manikura" />
            <h4>Profesionální nehtová modeláž</h4>
          </div>
          <div className="service" data-aos="zoom-in" data-aos-delay="200">
            <img className="pedikura" src={pedikura} alt="Pedikura" />
            <h4>Pedikúra</h4>
          </div>
          <div className="service" data-aos="zoom-in" data-aos-delay="300">
            <img
              className="kosmeticke_sluzby"
              src={kosmeticke_sluzby}
              alt="Kosmeticke sluzby"
            />
            <h4>Kosmetické ošetření pleti a další procedury</h4>
          </div>
        </div>

        <p className="text-bottom" data-aos="fade-up" data-aos-delay="400">
          Naším cílem je zajistit, abyste se u nás cítily uvolněně a spokojeně. Chceme, abyste odcházely s úsměvem a skvělým pocitem.
          <br />
          Těšíme se, až vás přivítáme a dopřejeme vám chvíle plné relaxace a péče.
        </p>
      </section>
    </main>
  );
};

export default HomePage;