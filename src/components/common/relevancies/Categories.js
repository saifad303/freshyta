import React from "react";
import c1 from "../../../images/c1.png";
import c2 from "../../../images/c2.png";
import c3 from "../../../images/c3.png";
import c4 from "../../../images/c4.png";
import c5 from "../../../images/c5.png";
import c6 from "../../../images/c6.png";

function Categories() {
  return (
    <>
      <div className="category-area">
        <div className="category-menu">
          <ul>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">Brands</a>
            </li>
            <li>
              <a href="">Price</a>
            </li>
          </ul>

          <div className="relevency">
            <a href="#">Relevency</a>
          </div>
        </div>
        {/* <!-- category menu --> */}

        <div className="category-body">
          <div className="container-fluid">
            <div className="row">
              <div className="single-cat">
                <p>Fresh Fruits</p>
                <div className="pic">
                  <img src={c1} alt="photo" />
                </div>
              </div>
              {/* <!-- single cat --> */}

              <div className="single-cat">
                <p>Fresh Fruits</p>
                <div className="pic">
                  <img src={c2} alt="photo" />
                </div>
              </div>
              {/* <!-- single cat --> */}

              <div className="single-cat">
                <p>Fresh Fruits</p>
                <div className="pic">
                  <img src={c3} alt="photo" />
                </div>
              </div>
              {/* <!-- single cat --> */}

              <div className="single-cat">
                <p>Fresh Fruits</p>
                <div className="pic">
                  <img src={c4} alt="photo" />
                </div>
              </div>
              {/* <!-- single cat --> */}

              <div className="single-cat">
                <p>Fresh Fruits</p>
                <div className="pic">
                  <img src={c5} alt="photo" />
                </div>
              </div>
              {/* <!-- single cat --> */}

              <div className="single-cat">
                <p>Fresh Fruits</p>
                <div className="pic">
                  <img src={c6} alt="photo" />
                </div>
              </div>
              {/* <!-- single cat --> */}

              <div className="single-cat">
                <p>Fresh Fruits</p>
                <div className="pic">
                  <img src={c5} alt="photo" />
                </div>
              </div>
              {/* <!-- single cat --> */}
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container fluid --> */}
        </div>
        {/* <!-- category-body --> */}
      </div>
      {/* <!-- category area end --> */}
    </>
  );
}

export default Categories;
