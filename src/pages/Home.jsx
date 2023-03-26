import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3> This is Home Page</h3>

      <button onClick={() => navigate("/order-summary")}>
        Place Order Now
      </button>
    </div>
  );
};

export default Home;
