import React from "react";
import { Link } from "react-router-dom";
import "./ProductListHeader.scss";
import Line from "./Line";

const ProductListHeader = () => {
  return (
    <>
      <div className="d-flex">
        <h1>Product List</h1>
        <div className="nav">
          <button>
            <Link to="/addproduct">ADD PRODUCT</Link>
          </button>
          <button>MASS DELETE</button>
        </div>
      </div>
      <Line />
    </>
  );
};

export default ProductListHeader;
