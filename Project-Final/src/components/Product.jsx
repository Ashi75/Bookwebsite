import React from "react";
import DATA from "../Data";
import { NavLink } from "react-router-dom";

const Product = () => {
  const cartItem = (item) => {
    return (
      <div className="col-md-3 mb-3">
        <div class="card h-100 text-center p-4" key={item.id}>
          <img
            src={item.cover}
            class="card-img-top"
            alt={item.title}
            height="250px"
            width="250px"
          />
          <div class="card-body text-center">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.author}</p>

            <p class="card-text lead fw-bold">Rs :{item.price}</p>
            <NavLink to={`/products/${item.id}`} class="btn btn-primary">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1>Trending Books</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cartItem)}</div>
      </div>
    </div>
  );
};

export default Product;

////
