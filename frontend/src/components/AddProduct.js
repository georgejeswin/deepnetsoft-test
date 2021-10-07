import React, { useState } from "react";
import "./Addproduct.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../actions/productActions";
import { useHistory } from "react-router";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("categories");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      price,
      quantity,
      category,
    };
    dispatch(createProduct(formData));
    alert("New Product added successfully");
    history.push("/dashboard");
    setName("");
    setPrice("");
    setQuantity("");
    setCategory("");
  };
  return (
    <div className="addproduct">
      <form onSubmit={handleSubmit} className="addproduct__form">
        <h1 className="formStyle__heading">Add Product</h1>
        <input
          type="text"
          className="formStyle__input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="formStyle__input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          className="formStyle__input"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <select
          name="category"
          id="category"
          className="formStyle__input"
          onChange={(e) => setCategory(e.target.value)}
          required
          value={category}
        >
          <option value="mobiles">mobiles</option>
          <option value="computers">computers</option>
          <option value="laptops">laptops</option>
          <option value="electronics">electronics</option>
          <option value="fashion">fashion</option>
        </select>
        <input type="submit" value="Add" className="formStyle__button" />
      </form>
    </div>
  );
};

export default AddProduct;
