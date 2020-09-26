import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./NotFound.component";
import { ProductDetails } from "./ProductDetails.component";
import { ProductIndex } from "./ProductIndex.component";
import { Products } from "./Products.component";

export const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductIndex />} />
        <Route path="product" element={<Products />}>
          <Route path="/" element={<ProductIndex />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
