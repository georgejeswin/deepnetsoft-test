import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = {
        username,
        password,
      };
      dispatch(login(formData, history));
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <h1 className="formStyle__heading">Login</h1>
        <input
          type="text"
          className="formStyle__input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="formStyle__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <input type="submit" value="Login" className="formStyle__button" />
      </form>
    </div>
  );
};

export default Login;
