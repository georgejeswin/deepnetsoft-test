import React from "react";
import AddProduct from "../components/AddProduct";
import Logo from "../images/logo.png";
import "./AddProductScreen.css";

const AddProductScreen = () => {
  return (
    <div className="addScreen">
      <img src={Logo} alt="DeepNetSoft" className="loginScreen__logo" />
      <AddProduct />
    </div>
  );
};

export default AddProductScreen;
