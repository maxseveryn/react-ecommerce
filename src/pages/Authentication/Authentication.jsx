import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Authentication.css";
import logo from "../../assets/logo.png";
import Login from "../../components/Authentication/Login/Login.jsx";
import Register from "../../components/Authentication/Register/Register.jsx";

export default function Authentication({ authBlock = "login" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentBlock, setCurrentBlock] = useState(() => {
    if (location.pathname.includes("register")) return "register";
    if (location.pathname.includes("login")) return "login";
    return authBlock;
  });

  function updateCurrentBlock(newBlock) {
    setCurrentBlock(newBlock);
    navigate(`/auth/${newBlock}`, { replace: true });
  }

  useEffect(() => {
    if (location.pathname.includes("register") && currentBlock !== "register") {
      setCurrentBlock("register");
    } else if (
      location.pathname.includes("login") &&
      currentBlock !== "login"
    ) {
      setCurrentBlock("login");
    }
  }, [location.pathname, currentBlock]);

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
