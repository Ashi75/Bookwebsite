import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="ml-5">
      <form>
        <div className="row mb-3 col-md-8 mt-5">
          <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
            First Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
        </div>
        <div className="row mb-3 col-md-8">
          <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
            Last Name :
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>

        <div className="row mb-3 col-md-8 ">
          <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
            Email :
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="row mb-3 col-md-8">
          <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
            Password :
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row mb-3 col-md-8">
          <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
            Confirm Password :
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="row mb-3 col-md-8">
          <div className="col-sm-9 offset-sm-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Check me out
              </label>
            </div>
          </div>
        </div>
      </form>
      <div className="row">
        <NavLink
          to="/"
          type="submit"
          className="col-md-8 
        btn btn-outline-primary mb-2"
        >
          Sign in
        </NavLink>
        <button
          className="col-md-8 mb-2
        btn btn-outline-primary"
        >
          <span className="fa fa-google me-2"></span>Sign in with Google
        </button>
        <button
          className="col-md-8 
        btn btn-outline-primary"
        >
          <span className="fa fa-facebook me-2"></span>Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Signup;
