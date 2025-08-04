import React, { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard.jsx";
import "./ProductGrid.css";

export default function ProductGrid(props) {
  const { productsName } = props;
  const [products, setProducts] = useState([]);

  const [maxItems, setMaxItems] = useState(12);

  const handleLoadMore = () => {
    setMaxItems((prev) => prev + maxItems);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  return (
    <div className="products-container">
      <h1 className="products__name">{productsName}VIP</h1>
      <div className="products__grid" role="list" tabIndex="-1">
        {products.slice(0, maxItems).map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      {maxItems < products.length && (
        <button className="products-view-more" onClick={handleLoadMore}>
          View more...
        </button>
      )}
    </div>
  );
}
