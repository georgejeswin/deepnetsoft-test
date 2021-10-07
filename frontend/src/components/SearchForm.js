import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchForm = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("categories");
  const products = useSelector((state) => state.products);
  const [searchedProducts, setSearchedProducts] = useState([]);
  useEffect(() => {
    setSearchedProducts(products);
  }, [products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category === "categories") {
      setSearchedProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setSearchedProducts(
        products.filter(
          (product) =>
            product.name.toLowerCase().includes(text.toLowerCase()) &&
            product.category.includes(category)
        )
      );
    }
  };

  return (
    <div className="products">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="formStyle__input"
          placeholder="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          name="category"
          id="category"
          className="formStyle__select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="categories">categories</option>
          <option value="mobile">mobiles</option>
          <option value="computers">computers</option>
          <option value="laptops">laptops</option>
          <option value="electronics">electronics</option>
          <option value="fashion">fashion</option>
        </select>
        <input type="submit" value="Search" className="formStyle__button" />
      </form>
      <table className="productsTable" width={500}>
        <thead>
          <tr className="productsTable__head">
            <th>
              <input type="checkbox" name="productChek" id="productCheck" />
            </th>
            <th>Product name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {searchedProducts.map((product) => (
            <tr key={product._id}>
              <td>
                <input type="checkbox" name="productChek" id="productCheck" />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchForm;
