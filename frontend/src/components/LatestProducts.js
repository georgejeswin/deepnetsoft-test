import React from "react";
import ProductCard from "./ProductCard";
import "./LatestProducts.css";

const LatestProducts = () => {
  return (
    <div className="latestProducts">
      <h1 className="dbScreen__heading">Latest Products</h1>
      <div className="latestProducts__list">
        <ProductCard
          title={"Product1"}
          price={"5333"}
          img={
            "https://dlcdnwebimgs.asus.com/gain/1e5e232e-8b4c-470c-8381-a2df8d38880b/w800"
          }
        />
        <ProductCard
          title={"Product1"}
          price={"5333"}
          img={
            "https://dlcdnwebimgs.asus.com/gain/1e5e232e-8b4c-470c-8381-a2df8d38880b/w800"
          }
        />
        <ProductCard
          title={"Product1"}
          price={"5333"}
          img={
            "https://dlcdnwebimgs.asus.com/gain/1e5e232e-8b4c-470c-8381-a2df8d38880b/w800"
          }
        />
        <ProductCard
          title={"Product1"}
          price={"5333"}
          img={
            "https://dlcdnwebimgs.asus.com/gain/1e5e232e-8b4c-470c-8381-a2df8d38880b/w800"
          }
        />
      </div>
    </div>
  );
};

export default LatestProducts;
