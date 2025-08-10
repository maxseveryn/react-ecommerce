import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Authentication.css";
import logo from "../../assets/logo.png";
import Login from "../../components/Authentication/Login/Login.jsx";
import Register from "../../components/Authentication/Register/Register.jsx";

export default function Authentication({ authBlock }) {
  const [currentBlock, setCurrentBlock] = useState(authBlock);

  function updateCurrentBlock(newBlock) {
    setCurrentBlock(newBlock);
    console.log(newBlock);
  }

  return (
    <div className="authentication-container">
      <title>Clothing Shop | Authentication</title>
      <Link to="/">
        <div className="auth-logo">
          <img className="brand__logo" src={logo} alt="Shop logo" />
        </div>
      </Link>
      <div className="authentication-block">
        <div className="authentication-block--actions">
          <button
            className={`authentication-block--button authentication-block--login ${
              currentBlock === "login"
                ? "authentication-block--button--active"
                : ""
            }`}
            onClick={() => updateCurrentBlock("login")}
          >
            Login
          </button>
          <button
            className={`authentication-block--button authentication-block--register ${
              currentBlock === "register"
                ? "authentication-block--button--active"
                : ""
            }`}
            onClick={() => updateCurrentBlock("register")}
          >
            Register
          </button>
        </div>
        {currentBlock === "login" && <Login />}
        {currentBlock === "register" && <Register />}
      </div>
    </div>
  );
}
