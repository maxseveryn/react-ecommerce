import React, { useState, useEffect } from "react";
import NestedDropdown from "./NestedDropdown/NestedDropdown";
import FilterSection from "./FilterSection/FilterSection";
import CheckboxList from "./CheckboxList/CheckboxList";

import "./Filters.css";

export default function Filters({ selectedFilters, setSelectedFilters }) {
  const [isFiltersOpen, setFiltersOpen] = useState(
    () => window.innerWidth > 1200
  );
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(true);
  const [isBrandOpen, setBrandOpen] = useState(true);
  const [isColorOpen, setColorOpen] = useState(true);

  const { prices, brands, colors } = selectedFilters;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setFiltersOpen(false);
      } else {
        setFiltersOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePricesChange = (newPrices) => {
    setSelectedFilters((prev) => ({ ...prev, prices: newPrices }));
  };

  const handleBrandsChange = (newBrands) => {
    setSelectedFilters((prev) => ({ ...prev, brands: newBrands }));
  };

  const handleColorsChange = (newColors) => {
    setSelectedFilters((prev) => ({ ...prev, colors: newColors }));
  };

  const openFilters = () => {
    setFiltersOpen(!isFiltersOpen);
  };

  const openCategories = () => {
    setCategoriesOpen(!isCategoriesOpen);
  };
  const openPrice = () => {
    setPriceOpen(!isPriceOpen);
  };
  const openBrand = () => {
    setBrandOpen(!isBrandOpen);
  };
  const openColor = () => {
    setColorOpen(!isColorOpen);
  };

  return (
    <div className="filters">
      <FilterSection
        label="Filters"
        isOpen={isFiltersOpen}
        onToggle={openFilters}
      >
        <div className="filter__sections">
          <FilterSection
            label="Categories"
            isOpen={isCategoriesOpen}
            onToggle={openCategories}
          >
            <NestedDropdown />
          </FilterSection>

          <FilterSection
            label="Price"
            isOpen={isPriceOpen}
            onToggle={openPrice}
          >
            <CheckboxList
              name="prices"
              values={["$0-$50", "$50-$100", "$100-$200", "$200+"]}
              selectedValues={prices}
              setSelectedValues={handlePricesChange}
            />
          </FilterSection>

          <FilterSection
            label="Brand"
            isOpen={isBrandOpen}
            onToggle={openBrand}
          >
            <CheckboxList
              name="brands"
              values={["Nike", "Adidas", "Puma", "Reebok"]}
              selectedValues={brands}
              setSelectedValues={handleBrandsChange}
            />
          </FilterSection>

          <FilterSection
            label="Color"
            isOpen={isColorOpen}
            onToggle={openColor}
          >
            <CheckboxList
              name="colors"
              values={["Red", "Blue", "Green", "Black"]}
              selectedValues={colors}
              setSelectedValues={handleColorsChange}
            />
          </FilterSection>
        </div>
      </FilterSection>
    </div>
  );
}
