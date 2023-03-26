import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  const auth = useAuth();
  return (
    <nav>
      <NavLink to="/" className="single-nav">
        Home
      </NavLink>

      <NavLink to="/about" className="single-nav">
        About
      </NavLink>

      <NavLink to="/products" className="single-nav">
        Products
      </NavLink>

      <NavLink to="/user" className="single-nav">
        Users
      </NavLink>

      <NavLink to="/profile" className="single-nav">
        Profile
      </NavLink>

      {!auth.user && (
        <NavLink to="/login" className="single-nav">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
