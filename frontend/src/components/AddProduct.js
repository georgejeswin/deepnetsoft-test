import React, { useState } from "react";
import "./Addproduct.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("category");
  return (
    <div className="addproduct">
      <form className="" onSubmit={() => {}} className="addproduct__form">
        <h1 className="formStyle__heading">Add Product</h1>
        <input
          type="text"
          className="formStyle__input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="formStyle__input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="formStyle__input"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <select
          name="category"
          id="category"
          className="formStyle__input"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="mobile">mobiles</option>
          <option value="laptops">laptops</option>
          <option value="electronics">electronics</option>
          <option value="fashion">fashion</option>
        </select>
        <input type="button" value="Add" className="formStyle__button" />
      </form>
    </div>
  );
};

export default AddProduct;
