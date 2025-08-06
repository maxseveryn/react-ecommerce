import React, { useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import "./ScrollTop.css";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="scroll-top-btn"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <FaLongArrowAltUp className="top__icon" />
    </button>
  );
}
