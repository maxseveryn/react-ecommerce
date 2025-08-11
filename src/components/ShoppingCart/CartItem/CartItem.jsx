import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext.js";
import { Link } from "react-router-dom";
import "./CartItem.css";
import Counter from "../Counter";

export default function CartItem({ product, quantity, onClose }) {
  const cart = useContext(CartContext);
  if (!product) return null;
  return (
    <div className="cart-item">
      <div className="cart-item__image-container">
        <img
          className="cart-item__image"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="cart-item__info">
        <Link
          to={`/product/${product.id}`}
          onClick={() => {
            onClose();
            setTimeout(() => {}, 100);
          }}
        >
          <div className="cart-item__info--title">{product.title}</div>
        </Link>
        <div className="cart-item__info--status">In Stock</div>
        <div className="cart-item__info--color">
          <div
            className="cart-item__info--color-value"
            style={{ backgroundColor: "#343D46" }}
          ></div>
          <span className="cart-item__info--color-text">Space Gray</span>
        </div>

        <div className="cart-item__info--actions">
          <button
            onClick={() => {
              cart.deleteFromCart(product.id);
            }}
            className="cart-item__info--btn cart-item__info--remove"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Remove
          </button>
          <button className="cart-item__info--btn cart-item__info--save">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Save for later
          </button>
        </div>
      </div>
      <div className="cart-item__final">
        <span className="cart-item__final--price">
          ${(product.price * quantity).toFixed(2)}
        </span>
        <Counter
          quantity={quantity}
          onIncrement={() => cart.addOneToCart(product.id)}
          onDecrement={() => cart.removeOneFromCart(product.id)}
        />
      </div>
    </div>
  );
}
