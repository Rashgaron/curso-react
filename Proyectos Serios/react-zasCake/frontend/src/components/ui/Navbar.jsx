import React from "react";
import logo from "../../assets/Logo/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light w-100">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse row" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto col-12 col-md-5 justify-content-around">
          <li className="nav-item active">
            {/* eslint-disable-next-line */}
            <Link className="nav-link enlace-header" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            {/* eslint-disable-next-line */}
            <Link className="nav-link enlace-header" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
        <div className="col-2 d-none d-md-flex justify-content-center">
          <Link to="/">
            <img src={logo} alt="logo" width="50%"></img>
          </Link>
        </div>
        <ul className="navbar-nav mr-auto col-12 col-md-5 justify-content-around">
          <li className="nav-item active ">
            {/* eslint-disable-next-line */}
            <Link to='tienda' className="nav-link enlace-header" href="#">
              Tienda
            </Link>
          </li>
          <li className="nav-item active">
            {/* eslint-disable-next-line */}
            <Link to='local'className="nav-link enlace-header" href="#">
              Local
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-3 d-md-none">
        <img src={logo} alt="logo" width="50%"></img>
      </div>
    </nav>
  );
};

export default Navbar;
