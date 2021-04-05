import React from "react";
import CartTotal from "./CartTotal";
import CartSummery from "./CartSummery";
import CartProducts from "./CartProducts";
import ItemCount from "./ItemCount";

function Cart() {
  return (
    <>
      <CartSummery />
      <div id="right-side-cart">
        <ItemCount />
        <CartProducts />
        <CartTotal />
      </div>
    </>
  );
}

export default Cart;
