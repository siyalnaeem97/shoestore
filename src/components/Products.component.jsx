import React from "react";
import { Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <h1 className="productPageHeading">All Products</h1>
      <Outlet />
    </div>
  );
};
