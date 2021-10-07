import React, { useEffect } from "react";
import AddProduct from "../components/AddProduct";
import Logo from "../images/logo.png";
import "./AddProductScreen.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const AddProductScreen = () => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.authData === null) {
      history.push("/");
    }
  }, [auth.authData, history]);
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
