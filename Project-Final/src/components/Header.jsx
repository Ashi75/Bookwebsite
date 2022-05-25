import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import "./header.css";

const Header = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LA BookStore
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse row"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 col-md-6">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons row col-md-6">
              <NavLink
                to="/login"
                className="btn btn-outline-dark col-md-4 mx-auto"
              >
                <i className="fa fa-sign-in ml-4"></i>Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-outline-dark col-md-4 mx-auto"
              >
                <i className="fa fa-user-plus me-1 mr-4"></i>Register
              </NavLink>
              <CartBtn />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
