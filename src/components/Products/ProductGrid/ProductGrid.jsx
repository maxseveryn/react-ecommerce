import React, { useState } from "react";
import ProductCard from "../Product/ProductCard.jsx";
import "./ProductGrid.css";

export default function ProductGrid(props) {
  const { productsName, products } = props;
  const [maxItems, setMaxItems] = useState(12);

  const handleLoadMore = () => {
    setMaxItems((prev) => prev + maxItems);
  };

  return (
    <div className="products-container">
      <h1 className="products__name">{productsName}VIP</h1>
      <div className="products__grid" role="list" tabIndex="-1">
        {products?.slice(0, maxItems).map((product) => (
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
