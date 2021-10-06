import React from "react";
import "./ProductsTable.css";

const ProductsTable = () => {
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
      <tr>
        <td>
          <input type="checkbox" name="productChek" id="productCheck" />
        </td>
        <td>January</td>
        <td>$100</td>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>
  );
};

export default ProductsTable;
