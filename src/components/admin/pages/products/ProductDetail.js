import React from "react";

function ProductDetail() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content detail-modal">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="product d-flex">
                <div className="proDetailImg">
                  <img src="images/p1.png" alt="Product" />
                </div>
                {/* <!-- proDetailImg --> */}
                <div className="proDetailContent">
                  <p className="detitle">Citrus Jumbo Yellow Lemons</p>
                  <p className="deunit">2 per pack</p>
                  <p className="deprice">$1.40</p>
                  <p className="destock">Available in stock</p>
                </div>
                {/* <!-- proDetailContent --> */}
              </div>
              {/* <!-- product --> */}

              <div className="proDescrip">
                <h4>About this Product</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi illo fugiat eius illum dolor corrupti autem,
                  aspernatur, recusandae veniam maxime doloremque commodi fuga
                  nisi asperiores voluptatum debitis temporibus omnis, unde
                  ipsum! Rerum labore, odit, saepe maiores sit molestias
                  quisquam.
                </p>
              </div>
              {/* <!-- proDescrip --> */}

              <button className="btn btn-info">Edit</button>
            </div>
            {/* <!-- modal body --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
