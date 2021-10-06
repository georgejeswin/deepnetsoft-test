import React from "react";
import ProductCard from "./ProductCard";
import "./LatestProducts.css";
import { useSelector } from "react-redux";

const LatestProducts = () => {
  const products = useSelector((state) => state.products);
  const latestProducts = products.slice(products.length - 4, products.length);

  return (
    <div className="latestProducts">
      <h1 className="dbScreen__heading">Latest Products</h1>
      <div className="latestProducts__list">
        {latestProducts.map((product) => (
          <ProductCard
            title={product.name}
            price={product.price}
            // img={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
