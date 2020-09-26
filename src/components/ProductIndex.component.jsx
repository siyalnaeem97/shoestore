import React from "react";
import { Link } from "react-router-dom";
import { DATA } from "./data";

export const ProductIndex = () => {
  return (
    <div className="productContainer">
      <ul className="productLists">
        {Object.entries(DATA).map(([id, { name, img }]) => (
          <li key={id} className="productsli">
            <Link className="productLink" to={`/product/${id}`}>
              <h2 className="productName">{name}</h2>
              <img src={img} alt={name} className="productImg" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
