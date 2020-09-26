import React from "react";
import { useParams } from "react-router-dom";
import { DATA } from "./data";

export const ProductDetails = () => {
  const { productId } = useParams();
  const { name, img } = DATA[productId];

  return (
    <div className="productDetailsContainer">
      <h6>Product Details of: {name}</h6>
      <img src={img} alt={name} className="productDetailsImg" />
    </div>
  );
};
