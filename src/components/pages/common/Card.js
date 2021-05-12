import React, { useEffect, useState } from "react";
import p1 from "../../../images/p1.png";
import { useProduct } from "../../../context/product/ProductProvider";

function Card({ title, price, unit, id }) {
  const {
    addCarthandler,
    isSession,
    setIsSession,
    increaseCartAmount,
    decearseCartAmount,
  } = useProduct();
  const [cartAmount, setCartAmount] = useState();

  useEffect(() => {
    // console.log("running...");
    const sessionData = JSON.parse(sessionStorage.getItem("products"));

    if (sessionData) {
      const amount = sessionData.find((data) => {
        return data.id === id;
      });

      if (amount) {
        // console.log(amount);
        setCartAmount(amount.cartAmount);
      }
    }

    setIsSession(false);
  }, [isSession === true]);

  return (
    <div
      className={`card-contents border-2 mr-3 mb-3  rounded-2xl hover:border-red-500 `}
    >
      <div className="card" style={{ width: "10rem", height: "20rem" }}>
        <img className="card-img-top pt-2" src={p1} alt="Card image cap" />
        <div className="card-body pb-0">
          <h5 className="card-title text-base font-medium text-gray-700 mb-1">
            {title}
          </h5>
          <p className="card-text text-sm font-medium mb-4">1{unit}</p>
          <p className="card-text text-base mb-4 font-medium text-gray-600">
            ${price}
          </p>
        </div>
      </div>

      {/* <button
        className=" content-center ml-10 mb-2 text-red-500 font-medium"
        onClick={(e) => {
          e.preventDefault();
          addCarthandler(id);
        }}
      >
        Add to cart
      </button> */}

      {cartAmount ? (
        <div className="flex items-center justify-center space-x-10 text-base  h-8 rounded-xl rounded-t-none text-white font-bold bg-red-500">
          <button
            className="font-semibold"
            onClick={(e) => {
              e.preventDefault();
              increaseCartAmount(id);
            }}
          >
            +
          </button>
          <span>{cartAmount}</span>
          <button
            className="font-semibold"
            onClick={(e) => {
              e.preventDefault();
              decearseCartAmount(id);
            }}
          >
            -
          </button>
        </div>
      ) : (
        <button
          className=" content-center ml-10 mb-2 text-red-500 font-medium"
          onClick={(e) => {
            e.preventDefault();
            addCarthandler(id);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default Card;
