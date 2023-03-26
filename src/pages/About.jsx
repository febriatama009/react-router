import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      This is About Page <br /> <br />
      <button onClick={() => navigate("/order-summary")}>
        Get to Placing Order
      </button>
    </div>
  );
};

export default About;
