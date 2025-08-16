import React, { useState } from "react";
import Filters from "../../components/Filters/Filters";
import ProductGrid from "../../components/Products/ProductGrid/ProductGrid";
import { useProducts } from "../../context/productsContext.js";

import "./Favourite.css";

export default function Favourite() {
  const { products } = useProducts();
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    prices: [],
    brands: [],
    colors: [],
  });

  const filteredProducts = products.filter((product) => {
    if (
      selectedFilters.categories.length > 0 &&
      !selectedFilters.categories.includes(product.category)
    ) {
      return false;
    }

    if (
      selectedFilters.brands.length > 0 &&
      !selectedFilters.brands.includes(product.brand)
    ) {
      return false;
    }

    if (
      selectedFilters.colors.length > 0 &&
      !selectedFilters.colors.includes(product.color)
    ) {
      return false;
    }

    if (selectedFilters.prices.length > 0) {
      const price = product.price;
      const inPriceRange = selectedFilters.prices.some((range) => {
        if (range === "$0-$50") return price >= 0 && price <= 50;
        if (range === "$50-$100") return price > 50 && price <= 100;
        if (range === "$100-$200") return price > 100 && price <= 200;
        if (range === "$200+") return price > 200;
        return true;
      });
      if (!inPriceRange) return false;
    }

    return true;
  });

  return (
    <div className="favourite">
      <div className="favourite__filters">
        <Filters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <div className="favourite__content">
        <h1>Favourite</h1>
        <div className="favourite__selected-filters">
          {Object.entries(selectedFilters).map(([filterName, values]) =>
            values.map((value) => (
              <div
                key={`${filterName}-${value}`}
                className="favourite__selected-filters__filter"
                onClick={() => {
                  setSelectedFilters((prev) => ({
                    ...prev,
                    [filterName]: prev[filterName].filter((v) => v !== value),
                  }));
                }}
              >
                {value}
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            ))
          )}
          <div
            className="favourite__selected-filters__filter clear__filters"
            onClick={() => {
              setSelectedFilters({
                categories: [],
                prices: [],
                brands: [],
                colors: [],
              });
            }}
          >
            Reset filters
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="favourite__products">
          <ProductGrid products={filteredProducts} small={true} />
        </div>
      </div>
    </div>
  );
}
