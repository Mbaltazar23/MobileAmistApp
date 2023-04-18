import React from "react";
import { Product } from "../../../../../Domain/entities/Product";

const StudentProductDetailViewModel = (product: Product) => {
  const productImagesList: string[] = [product.image];

  console.log("PRODUCT SELECT : " + JSON.stringify(product));

  const addToBag = async () => {};
  return {
    addToBag,
    productImagesList,
  };
};

export default StudentProductDetailViewModel;
