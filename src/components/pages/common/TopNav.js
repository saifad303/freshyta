import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

function TopNav() {
  return (
    <>
      <div className="flex items-center justify-between bg-white px-16 py-3">
        <div className="flex items-center space-x-2 w-1/6">
          <button type="button">
            <AiOutlineMenu size={27} className=" text-red-500" />
          </button>
          <a href="" className=" text-3xl font-bold text-red-500">
            Freshyta
          </a>
        </div>
        <div className="flex items-center justify-center space-x-2 w-3/6 relative">
          <input
            type=""
            placeholder="search for product and brand"
            className="bg-gray-100 w-full h-9 px-3 py-2 rounded-full focus:outline-none"
          />
          <button className="absolute right-4 text-red-500">
            <AiOutlineSearch size={20} />
          </button>
        </div>
        <div className="w-2/6 flex items-center space-x-7 justify-end">
          <a
            href=""
            className="text-base font-semibold text-gray-600 hover:text-red-500"
          >
            New
          </a>
          <a
            href=""
            className="text-base font-semibold text-gray-600 hover:text-red-500"
          >
            Deals
          </a>
          <a
            href=""
            className="text-base font-semibold text-gray-600 hover:text-red-500"
          >
            Shop by brand
          </a>
          <a href="" className="">
            <FaUserCircle size={20} className="text-red-500" />
          </a>
        </div>
      </div>
    </>
  );
}

export default TopNav;
