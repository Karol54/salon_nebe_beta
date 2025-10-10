import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactPage.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, //délka animace v ms
      offset: 100,    //kdy se animace spustí
      once: true,     //animace se spustí jen jednou
    });
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-info" data-aos="fade-right">
        <div className="contact-left-text">
          <h2 data-aos="fade-up" data-aos-delay="100">Kontakty:</h2>
          
          <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
            <FaPhone className="icon" />
            <div>
              <p>+420 731 765 696</p>
              <p>+420 603 534 152</p>
              <p>+420 733 677 634</p>
            </div>
          </div>

          <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
            <FaEnvelope className="icon" />
            <div>
              <p>sarka.sporikova@seznam.cz</p>
              <p>ccilscosmetics@gmail.com</p>
            </div>
          </div>

          <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
            <FaMapMarkerAlt className="icon" />
            <p>Náměstí 31, Klimkovice, 742 83</p>
          </div>

          <div className="contact-item" data-aos="fade-up" data-aos-delay="500">
            <FaClock className="icon" />
            <p>Dle domluvy</p>
          </div>
        </div>
      </div>

      <div className="contact-image" data-aos="fade-left" data-aos-delay="300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531.6665951994462!2d18.13096123887921!3d49.78708231853522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e67d24712d75%3A0x58b05ea0e2b9a2f!2zTsOhbcSbc3TDrSAzMSwgNzQyIDgzIEtsaW1rb3ZpY2U!5e0!3m2!1scs!2scz!4v1759408940568!5m2!1scs!2scz"
          width="100%"
          height="440"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
