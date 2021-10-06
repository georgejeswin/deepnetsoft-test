import React from "react";
import AddProduct from "../components/AddProduct";
import Logo from "../images/logo.png";
import "./AddProductScreen.css";
import { Link } from "react-router-dom";

const AddProductScreen = () => {
  return (
    <div className="addScreen">
      <Link to="/dashboard">
        <img src={Logo} alt="DeepNetSoft" className="loginScreen__logo" />
      </Link>
      <AddProduct />
    </div>
  );
};

export default AddProductScreen;
