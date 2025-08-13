import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  shipping: 16,
  vat: 0.2,
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getSubtotalCost: () => {},
  getVatCost: () => {},
  getShipping: () => {},
  getTotalCost: () => {},
  getTotalQuantity: () => {},
});
