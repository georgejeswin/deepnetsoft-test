import React, { useState } from "react";

const SearchForm = () => {
  const [text, setText] = useState("");
  return (
    <form className="searchForm" onSubmit={() => {}}>
      <input
        type="text"
        className="formStyle__input"
        placeholder="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select name="category" id="category" className="formStyle__select">
        <option value="mobile">mobiles</option>
        <option value="laptops">laptops</option>
        <option value="electronics">electronics</option>
        <option value="fashion">fashion</option>
      </select>
      <input type="button" value="Search" className="formStyle__button" />
    </form>
  );
};

export default SearchForm;
