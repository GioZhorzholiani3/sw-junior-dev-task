import React from "react";
import ProductListHeader from "../components/Header/ProductListHeader";
import data from "../assets/Data";

const ProductList = () => {
  return (
    <div>
      <ProductListHeader />
      {data.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
};

export default ProductList;
