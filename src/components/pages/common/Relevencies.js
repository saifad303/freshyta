import React from "react";
import c2 from "../../../images/c2.png";
import "./relevecies.css";

function Relevencies() {
  return (
    <>
      <div className="relevencies">
        <div className="bg-white pl-2 pr-4 py-3 mx-3 mt-3 mb-3 rounded-2xl">
          <div className="relevency-selection flex items-center justify-start">
            <button
              type="button"
              className="text-lg font-semibold  text-gray-400 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-2xl"
            >
              Categories
            </button>
            <button
              type="button"
              className="text-lg font-semibold text-gray-400 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-2xl"
            >
              Brand
            </button>
            <button
              type="button"
              className="text-lg font-semibold text-gray-400 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-2xl"
            >
              Imported
            </button>
          </div>
          <div className="relevency-contents flex content-start flex-wrap px-3 mt-2 mb-2 h-36 overflow-y-scroll">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, index) => {
              return (
                <a
                  href=""
                  className="flex mr-3 mb-3 items-center justify-between hover:border-red-500 border-2 space-x-1  border-gray-100 rounded-xl"
                  key={index}
                >
                  <span className="font-medium text-gray-600 text-base pl-6 w-4/6">
                    Fresh Fruits
                  </span>
                  <img src={c2} alt="" className="pt-4 w-16 pb-1 justify-end" />
                </a>
              );
            })}
          </div>
          <div className="px-3 mt-1 flex items-center space-x-2 overflow-x-scroll relevency-horizontal">
            {[
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1,
            ].map((data, index) => {
              return (
                <a
                  href=""
                  className="flex items-center flex-shrink-0 space-x-2 border-2 rounded-xl border-gray-300 px-2 py-2"
                  key={index}
                >
                  <span className="text-sm font-medium">Fresh Fruits</span>
                  <img src={c2} alt="" className="" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Relevencies;
