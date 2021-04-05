import React from "react";

function CartTotal() {
  return (
    <>
      <div className="subtotal-tk">
        <div className="subtotal">Subtotal</div>
        <div className="tk">$30.00</div>
      </div>

      <div className="checkbtn">
        <a href="#">Checkout</a>
      </div>

      <input type="checkbox" id="openCart" />
      <label htmlFor="openCart">
        <div id="mini-cart">
          <i className="fas fa-chevron-right"></i>
        </div>
      </label>
    </>
  );
}

export default CartTotal;
