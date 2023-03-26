import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h3>This is Product Page</h3> <br />
      <input type="search" placeholder="Find anything" />
      <br /> <br />
      <nav>
        <NavLink to="featured" className="single-nav">
          See what's featured{" "}
        </NavLink>
        <NavLink to="new" className="single-nav">
          New Products for You!
        </NavLink>
      </nav>{" "}
      <br />
      {/* render corresponding components */}
      <Outlet />
    </div>
  );
};

export default Products;
