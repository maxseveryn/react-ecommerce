import React from "react";
import { useProducts } from "../../context/productsContext.js";
import "./Homepage.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider.jsx";
import ProductGrid from "../../components/Products/ProductGrid/ProductGrid.jsx";
import Marquee from "../../components/Marquee/Marquee.jsx";

import img1 from "../../assets/marquee-brands/1.svg";
import img2 from "../../assets/marquee-brands/2.svg";
import img3 from "../../assets/marquee-brands/3.svg";
import img4 from "../../assets/marquee-brands/4.svg";
import img5 from "../../assets/marquee-brands/5.svg";
import img6 from "../../assets/marquee-brands/6.svg";
import img7 from "../../assets/marquee-brands/7.svg";
import img8 from "../../assets/marquee-brands/8.svg";
import img9 from "../../assets/marquee-brands/9.svg";
import img10 from "../../assets/marquee-brands/10.svg";

export default function Homepage() {
  const { products } = useProducts();
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
      <Marquee items={imgs} />
    </div>
  );
}
