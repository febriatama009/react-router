import React from "react";
import { useNavigate } from "react-router-dom";

const NoMatchUrls = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <p>Page that you looking for has not found </p> <br />
      <button onClick={() => navigate("/")}>Return to Home</button>
    </div>
  );
};

export default NoMatchUrls;
