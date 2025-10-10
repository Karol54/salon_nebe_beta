import React from "react";
import "./Footer.css";

import salon_nebe_logo from "../../image/salon_nebe_logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img className="logo" src={salon_nebe_logo} alt="Logo"/>
                <div className="left-text">
                    <h5>Kontakty</h5>
                    <p>
                        <h6>Email:</h6>
                        sarka.sporikova@seznam.cz <br/>
                        ccilscosmetics@gmail.com <br/>
                        <br></br>
                        <h6>Telefon:</h6>
                        +420 731 756 696<br/>
                        +420 603 534 152
                    </p>
                </div>
                <div className="right-text">
                    <h5>Otevírácí doba</h5>
                    <p>Dle domluvy.</p>
                </div>
            </div>

            <div className="copyright">
                    <p>©2025 SALON NEBE. Všechna práva vyhrazena.</p>
                </div>
        </footer>
    );
};

export default Footer;