import React from "react";
import { Link } from "react-router-dom";
import "./ProductAddHeader.scss";
import Line from "./Line";

const ProductAddHeader = () => {
  return (
    <>
      <div className="d-flex ">
        <h1>Add Product</h1>
        <div className="nav">
          <button>SAVE</button>
          <button>
            <Link to="/products">CANCEL</Link>
          </button>
        </div>
      </div>
      <Line />
    </>
  );
};

export default ProductAddHeader;
