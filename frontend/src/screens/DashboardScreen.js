import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LatestProducts from "../components/LatestProducts";
import SearchForm from "../components/SearchForm";
import Logo from "../images/logo.png";
import "./DashboardScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { useHistory } from "react-router";
import { logout } from "../actions/authActions";

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProducts());
    if (auth.authData === null) {
      history.push("/");
    }
  }, [dispatch, auth.authData, history]);

  const handleLogout = () => {
    dispatch(logout(history));
  };
  return (
    <div className="dbScreen">
      <div className="dbScreen__nav">
        <img src={Logo} alt="DeepNetSoft" className="dbScreen__logo" />
        <button className="dbScreen__button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h1 className="dbScreen__heading">Dashboard</h1>
      <Link to={"/addproduct"} className="dbScreen__link">
        <button className="dbScreen__button">Add Product</button>
      </Link>
      <div className="dbScreen__search">
        <SearchForm />
      </div>
      <div className="latestProducts">
        <LatestProducts />
      </div>
    </div>
  );
};

export default DashboardScreen;
