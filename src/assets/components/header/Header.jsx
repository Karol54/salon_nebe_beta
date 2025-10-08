import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import salon_nebe_logo from "../../image/salon_nebe_logo.png";

const Header = () => {
    return (
    <nav className="navbar navbar-expand-lg px-3">
      <a className="navbar-brand" href="#">
        <img className="logo" src={salon_nebe_logo} alt="Logo"/>
      </a>

      <button
        className="navbar-toggler navbar-expand-lg navbar-dark px-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Domů</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="kosmetickéSlužby">Kosmetické služby</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="manikúra">Manikúra</Link>
          </li>
          <li className="nav-item"><Link className="nav-link" to="pedikúra">Pedikúra</Link>
          </li>
          <li className="nav-item"><Link className="nav-link" to="kontakty">Kontakty</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;