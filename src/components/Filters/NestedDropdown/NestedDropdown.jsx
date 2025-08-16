import React, { useState } from "react";
import "./NestedDropdown.css";

const menuData = [
  {
    label: "Women's clothing",
    submenu: [
      { label: "Skirts" },
      { label: "Dresses" },
      { label: "Outerwear" },
      { label: "T-shirts" },
      { label: "Sweaters" },
      { label: "Underwear" },
      { label: "Sportswear" },
      { label: "Loungewear and sleepwear" },
      { label: "Shoes" },
      { label: "Pants and shorts" },
      { label: "Accessories" },
      { label: "Swimwear" },
      { label: "Jeans" },
    ],
  },
  {
    label: "Children's clothing",
    submenu: [
      { label: "For girls" },
      { label: "For boys" },
      { label: "For toddlers" },
      { label: "Shoes" },
      { label: "Outerwear" },
      { label: "School uniforms" },
    ],
  },
  {
    label: "Men's clothing",
    submenu: [
      { label: "Shirts" },
      { label: "T-shirts" },
      { label: "Sweaters" },
      { label: "Outerwear" },
      { label: "Pants and shorts" },
      { label: "Underwear" },
      { label: "Sportswear" },
      { label: "Shoes" },
      { label: "Accessories" },
    ],
  },
  {
    label: "Accessories",
    submenu: [
      { label: "Bags" },
      { label: "Hats" },
      { label: "Scarves" },
      { label: "Belts" },
      { label: "Jewelry" },
      { label: "Watches" },
      { label: "Sunglasses" },
    ],
  },
  {
    label: "Beauty & Personal Care",
    submenu: [
      { label: "Skincare" },
      { label: "Makeup" },
      { label: "Haircare" },
      { label: "Fragrances" },
      { label: "Bath & Body" },
    ],
  },
];

function MenuItem({ item }) {
  const [open, setOpen] = useState(false);

  const toggle = (e) => {
    e.stopPropagation();
    if (item.submenu) setOpen((prev) => !prev);
  };

  return (
    <li className="dropdown-menu__item">
      <div onClick={toggle}>{item.label}</div>
      {item.submenu && open && (
        <ul className="dropdown-menu__item__submenu">
          {item.submenu.map((subItem, idx) => (
            <MenuItem key={idx} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function NestedDropdown() {
  return (
    <div>
      <ul className="dropdown-menu">
        {menuData.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
