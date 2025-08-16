import React from "react";
import { useProducts } from "../../context/productsContext.js";
import "./Homepage.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider.jsx";
import ProductGrid from "../../components/Products/ProductGrid/ProductGrid.jsx";
export default function Homepage() {
  const { products } = useProducts();
  return (
    <div className="homepage">
      <title>Clothing Shop | Home</title>
      <ImageSlider />
      <div className="page-content">
        <ProductGrid
          products={products}
          productsQuantity={12}
          productsName="Vip"
        />
      </div>
    </div>
  );
}
