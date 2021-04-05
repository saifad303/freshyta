import React from "react";
import p4 from "../../../images/p4.png";

function CartProducts() {
  return (
    <>
      <div className="all-pro">
        <div className="proCart">
          <div className="pic">
            <img src={p4} alt="product" />
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
    </>
  );
}

export default CartProducts;
