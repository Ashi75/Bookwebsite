import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="ml-5">
      <form>
        <div className="row mb-3 col-md-8 mt-5">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="row mb-3 col-md-8">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="row mb-3 col-md-8">
          <div className="col-sm-10 offset-sm-2">
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

export default Login;
