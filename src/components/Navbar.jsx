import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink>
        <button>
          {" "}
          <Link to="/">Home</Link>
        </button>{" "}
        <button>
          <Link to="/about">About</Link>
        </button>
      </NavLink>
    </div>
  );
};

export default Navbar;
