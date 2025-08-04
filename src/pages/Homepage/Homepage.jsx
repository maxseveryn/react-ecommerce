import React, { useState, useEffect } from "react";
import "./Homepage.css";
import NavBar from "../../components/NavBar/NavBar.jsx";
import ImageSlider from "../../components/ImageSlider/ImageSlider.jsx";
import ProductGrid from "../../components/Products/ProductGrid/ProductGrid.jsx";

export default function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  return (
    <div className="homepage">
      <title>Clothing Shop | Home</title>
      <NavBar />
      <div className="page-content">
        <ImageSlider />
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
