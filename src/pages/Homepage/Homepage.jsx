import React from "react";
import "./Homepage.css";
import NavBar from "../../components/NavBar/NavBar";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import ProductGrid from "../../components/Products/ProductGrid/ProductGrid";

export default function Homepage() {
  return (
    <div className="page-container">
      <title>Clothing Shop | Home</title>
      <NavBar />
      <ImageSlider />
      <ProductGrid />
    </div>
  );
}
