import React from "react";
import { useCart } from "../../../context/cart/Cart";

function CartSummery() {
  let { cartCssHandler } = useCart();
  return (
    <>
      <input type="checkbox" id="openCart" onClick={cartCssHandler} />
      <label htmlFor="openCart" className="cartBox">
        <div className="cart-up">
          <i className="fas fa-shopping-bag"></i>
          <p>4 ITEM</p>
        </div>
        {/* <!-- cart up --> */}
        <div className="cart-down">
          <p>৳ 360</p>
        </div>
        {/* <!-- cart down --> */}
      </label>
    </>
  );
}

export default CartSummery;
