import React from "react";
import { useSelector } from "react-redux";
import "./ProductsTable.css";

const ProductsTable = () => {
  const products = useSelector((state) => state.products);
  return (
    <table className="productsTable" width={500}>
      <tr className="productsTable__head">
        <th>
          <input type="checkbox" name="productChek" id="productCheck" />
        </th>
        <th>Product name</th>
        <th>Price</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {products.map((product) => (
        <tr>
          <td>
            <input type="checkbox" name="productChek" id="productCheck" />
          </td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      ))}
    </table>
  );
};

export default ProductsTable;
