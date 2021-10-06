import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, price }) => {
  return (
    <div className="productCard">
      {/* <img src={img} width={220} height={200} alt="" /> */}
      <p>{title}</p>
      <p>$ {price}</p>
    </div>
  );
};

export default ProductCard;
