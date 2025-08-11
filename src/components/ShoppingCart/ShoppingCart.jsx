import React from "react";
import CartItem from "./CartItem/CartItem.jsx";
import "./ShoppingCart.css";

export default function ShoppingCart({ onClose }) {
  return (
    <div className="shopping-cart">
      <div className="shopping-cart__header">
        <span className="shopping-cart__header--text">Shopping Cart</span>
        <button className="shopping-cart__header--close" onClick={onClose}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="shopping-cart__items">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="shopping-cart__info">
        <div className="shopping-cart__info-row">
          <p>Subtotal</p>
          <p className="shopping-cart__info--subtotal">$1,500</p>
        </div>
        <div className="shopping-cart__info-row">
          <p>Shipping</p>
          <p className="shopping-cart__info--shipping">$16</p>
        </div>
        <div className="shopping-cart__info-row">
          <p>VAT(20%)</p>
          <p className="shopping-cart__info--vat">$339,40</p>
        </div>
      </div>

      <div className="shopping-cart__total">
        <p>Total</p>
        <p className="shopping-cart__total--value">$339,40</p>
      </div>
      <button className="shopping-cart__checkout">Procced To Checkout</button>
    </div>
  );
}
