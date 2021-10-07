import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, price }) => {
  return (
    <div className="productCard">
      <p>{title}</p>
      <p>$ {price}</p>
    </div>
  );
};

export default ProductCard;
