import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaLongArrowAltUp } from "react-icons/fa";
import "./ScrollTop.css";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 100);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
