import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Return</button> <br />{" "}
      <div>
        <h2> Order Summary</h2>
        <ul>
          <li>Apple Pie</li>
          <li>Orange Juice</li>
          <li>Anjayers</li>
        </ul>
      </div>
    </>
  );
};

export default OrderSummary;
