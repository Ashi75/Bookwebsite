import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  // We get a state of addItems
  // Write the name of the file not the function
  const state = useSelector((state) => state.addItem);
  return (
    <div className="col-md-4">
      <NavLink to="/cart" className="btn btn-outline-primary ms-2 mx-auto">
        <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
      </NavLink>
    </div>
  );
};

export default CartBtn;
