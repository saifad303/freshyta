import React from "react";
import p1 from "../../../images/p1.png";
import p2 from "../../../images/p2.png";

function HomeContainer() {
  return (
    <>
      <div className="row">
        <div className="single-product">
          <div data-toggle="modal" data-target="#exampleModal">
            <img src={p1} alt="product" />
            <div className="all-pcontent">
              <p className="title ml-3">
                Citrus Jumbo <br />
                Yellow Lemons
              </p>
              <p className="unit ml-3">2 per pack</p>
              <p className="price ml-3">$1.40</p>
              <p className="cart">Add to Cart</p>
            </div>
            {/* <!-- all pcontent --> */}
          </div>

          {/* <!-- for modal --> */}
          <div className="when-cart-hover">
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-minus"></i>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-plus"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- when car hover --> */}
        </div>
        {/* <!--  single product --> */}

        <div className="single-product">
          <img src={p2} alt="product" />
          <div className="all-pcontent">
            <p className="title ml-3">
              Granny Smith <br />
              Apples
            </p>
            <p className="unit ml-3">2 per pack</p>
            <p className="price ml-3">$1.40</p>
            <p className="cart">Add to Cart</p>
          </div>
          {/* <!-- all pcontent --> */}
          <div className="when-cart-hover">
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-minus"></i>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-plus"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- when car hover --> */}
        </div>
        {/* <!--  single product --> */}
      </div>
      {/* <!-- row --> */}
    </>
  );
}

export default HomeContainer;
