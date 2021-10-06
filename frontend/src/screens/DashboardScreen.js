import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LatestProducts from "../components/LatestProducts";
import ProductsTable from "../components/ProductsTable";
import SearchForm from "../components/SearchForm";
import Logo from "../images/logo.png";
import "./DashboardScreen.css";
import { useDispatch } from "react-redux";
import { getProducts } from "../actions/productActions";

const DashboardScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="dbScreen">
      <img src={Logo} alt="DeepNetSoft" className="dbScreen__logo" />
      <h1 className="dbScreen__heading">Dashboard</h1>
      <Link to={"/addproduct"} className="dbScreen__link">
        <button className="dbScreen__button">Add Product</button>
      </Link>
      <div className="dbScreen__search">
        <SearchForm />
        <ProductsTable />
      </div>
      <div className="latestProducts">
        <LatestProducts />
      </div>
    </div>
  );
};

export default DashboardScreen;
