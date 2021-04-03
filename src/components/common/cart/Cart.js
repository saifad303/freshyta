import React from "react";

function Cart() {
  return (
    <>
      <input type="checkbox" id="openCart" />
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

      <div id="right-side-cart">
        <div className="item-clear">
          <div className="itemInCart">
            <span>4</span> Item in cart
          </div>
          <div className="clear">
            <a href="#">Clear</a>
          </div>
        </div>
        {/* <!-- item clear --> */}

        <div className="all-pro">
          <div className="proCart">
            <div className="pic">
              <img src="images/p1.png" alt="product" />
            </div>
            {/* <!-- pic --> */}
            <div className="pcContent">
              <div className="pcTitle">
                <p>Citrus Jumbo Yellow Lemons</p>
              </div>
              <div className="pcUnit">
                <p>2 per pack</p>
              </div>
              <div className="pcPrice">
                <p>$1.40</p>
              </div>
              <div className="pcNumber">
                <a href="#">
                  <i className="fas fa-minus"></i>
                </a>{" "}
                1
                <a href="#">
                  <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
            {/* <!-- pccontent --> */}
          </div>
          {/* <!-- proCart --> */}

          <div className="proCart">
            <div className="pic">
              <img src="images/p2.png" alt="product" />
            </div>
            {/* <!-- pic --> */}
            <div className="pcContent">
              <div className="pcTitle">
                <p>Citrus Jumbo Yellow Lemons</p>
              </div>
              <div className="pcUnit">
                <p>2 per pack</p>
              </div>
              <div className="pcPrice">
                <p>$1.40</p>
              </div>
              <div className="pcNumber">
                <a href="#">
                  <i className="fas fa-minus"></i>
                </a>{" "}
                1
                <a href="#">
                  <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
            {/* <!-- pccontent --> */}
          </div>
          {/* <!-- proCart --> */}

          <div className="proCart">
            <div className="pic">
              <img src="images/p3.png" alt="product" />
            </div>
            {/* <!-- pic --> */}
            <div className="pcContent">
              <div className="pcTitle">
                <p>Citrus Jumbo Yellow Lemons</p>
              </div>
              <div className="pcUnit">
                <p>2 per pack</p>
              </div>
              <div className="pcPrice">
                <p>$1.40</p>
              </div>
              <div className="pcNumber">
                <a href="#">
                  <i className="fas fa-minus"></i>
                </a>{" "}
                1
                <a href="#">
                  <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
            {/* <!-- pccontent --> */}
          </div>
          {/* <!-- proCart --> */}

          <div className="proCart">
            <div className="pic">
              <img src="images/p4.png" alt="product" />
            </div>
            {/* <!-- pic --> */}
            <div className="pcContent">
              <div className="pcTitle">
                <p>Citrus Jumbo Yellow Lemons</p>
              </div>
              <div className="pcUnit">
                <p>2 per pack</p>
              </div>
              <div className="pcPrice">
                <p>$1.40</p>
              </div>
              <div className="pcNumber">
                <a href="#">
                  <i className="fas fa-minus"></i>
                </a>{" "}
                1
                <a href="#">
                  <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
            {/* <!-- pccontent --> */}
          </div>
          {/* <!-- proCart --> */}
        </div>
        {/* <!-- all pro --> */}

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
      </div>
    </>
  );
}

export default Cart;
