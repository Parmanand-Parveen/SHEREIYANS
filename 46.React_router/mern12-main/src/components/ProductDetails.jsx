import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  const navigate = useNavigate();

  return (
    <div>
      <h1>ProductDetails</h1>

      <h1 className="text-red-600 text-3xl font-semibold">{params.id}</h1>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default ProductDetails;
