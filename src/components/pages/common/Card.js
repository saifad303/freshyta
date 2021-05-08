import React from "react";
import p1 from "../../../images/p1.png";

function Card() {
  return (
    <div className="card-contents border-2 mr-3 mb-3 border-gray-200 rounded-2xl hover:border-red-500">
      <div className="card" style={{ width: "12rem" }}>
        <img className="card-img-top pt-2" src={p1} alt="Card image cap" />
        <div className="card-body pb-0">
          <h5 className="card-title text-base font-medium text-gray-700 mb-1">
            Citrus jumbo yellow lemon
          </h5>
          <p className="card-text text-sm font-medium mb-4">1kg</p>
          <p className="card-text text-base mb-4 font-medium text-gray-600">
            $1.40
          </p>
        </div>
      </div>
      <button className=" content-center ml-12 mb-2 text-red-500 font-medium">
        Add to cart
      </button>
    </div>
  );
}

export default Card;
