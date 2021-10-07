import React, { useEffect } from "react";
import Logo from "../images/logo.png";
import "./LoginScreen.css";
import Login from "../components/Login";

const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <img src={Logo} alt="DeepNetSoft" className="loginScreen__logo" />
      <Login />
    </div>
  );
};

export default LoginScreen;
