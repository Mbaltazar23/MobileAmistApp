import React, { useContext, useState } from "react";
import { ProductContext } from "../../../../context/ProductContext";

const StudentProductListViewModel = () => {
  const { products, getProducts } = useContext(ProductContext);

  return {
    products,
    getProducts,
  };
};

export default StudentProductListViewModel;
