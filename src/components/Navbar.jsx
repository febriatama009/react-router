import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="single-nav">
        Home
      </NavLink>

      <NavLink to="/about" className="single-nav">
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
