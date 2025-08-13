import React, { useEffect, useState } from "react";
import { CartContext } from "./cartContext.js";
import { useProducts } from "./productsContext.js";

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const shipping = 16;
  const vat = 0.2;

  const { products } = useProducts();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    return quantity === undefined ? 0 : quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((products) =>
      products.filter((product) => product.id !== id)
    );
  }

  function getProductData(id) {
    return products.find((p) => p.id === id);
  }

  function getSubtotalCost() {
    return cartProducts.reduce((total, cartItem) => {
      const productData = getProductData(cartItem.id);
      return productData
        ? total + productData.price * cartItem.quantity
        : total;
    }, 0);
  }

  const getShipping = () => {
    return shipping;
  };

  const getVatCost = () => {
    const subtotal = getSubtotalCost();
    return subtotal * vat;
  };

  const getTotalQuantity = () =>
    cartProducts.reduce((total, cartItem) => total + cartItem.quantity, 0);

  const getTotalCost = () => {
    const subtotal = getSubtotalCost();
    const vatCost = getVatCost();
    return subtotal + vatCost + shipping;
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getSubtotalCost,
    getVatCost,
    getShipping,
    getTotalCost,
    getTotalQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
