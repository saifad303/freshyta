import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

function Cart({ children }) {
  let [rightActive, setRightActive] = useState(false);
  let cartCssHandler = () => {
    setRightActive(!rightActive);
  };
  let value = { cartCssHandler, rightActive };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default Cart;
