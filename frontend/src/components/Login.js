import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <form className="" onSubmit={() => {}} className="login__form">
        <h1 className="formStyle__heading">Login</h1>
        <input
          type="text"
          className="formStyle__input"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="formStyle__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="button" value="Login" className="formStyle__button" />
      </form>
    </div>
  );
};

export default Login;
