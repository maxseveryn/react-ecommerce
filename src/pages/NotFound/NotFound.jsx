import React from "react";
import "./NotFound.css";

import inDevelopmentImg from "../../assets/panda.png";

export default function NotFound() {
  return (
    <div class="not_found">
      <title>Not Found :( </title>
      <img className="not-found__img" src={inDevelopmentImg} alt="" />
      <h1>404</h1>
      <h3>This content is currently unavailable :( </h3>
    </div>
  );
}
