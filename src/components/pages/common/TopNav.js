import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillDashboard,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import LeftSideMenu from "./LeftSideMenu";
import "./topnav.css";

function TopNav({ sidebarMenuHandler }) {
  const [isMenuShow, setIsMneuShow] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isSideMenuShow, setIsSideMenuShow] = useState(true);
  const menuDropdownHandler = () => {
    setIsMneuShow(!isMenuShow);
    setIsSearchShow(false);
  };
  const searchShowHandler = () => {
    setIsSearchShow(!isSearchShow);
    setIsMneuShow(false);
  };
  return (
    <>
      <div className="top-nav flex items-center justify-between bg-white px-16 py-3 relative">
        <div className="top-nav-left flex items-center space-x-2 w-1/6">
          <button type="button">
            <AiOutlineMenu
              size={27}
              className="ai-menu-icon text-red-500"
              onClick={sidebarMenuHandler}
            />
          </button>
          <a href="" className=" text-3xl font-bold text-red-500">
            Freshyta
          </a>
        </div>
        <div className="search-bar flex items-center justify-center space-x-2 w-3/6 relative">
          <input
            type=""
            placeholder="search for product and brand"
            className="bg-gray-100 w-full h-9 px-3 py-2 rounded-full focus:outline-none"
          />
          <button className="absolute right-4 text-red-500">
            <AiOutlineSearch size={20} />
          </button>
        </div>
        <div className="top-nav-right relative w-2/6 flex items-center space-x-7 justify-end">
          <a
            href=""
            className="item-1 text-base font-semibold text-gray-600 hover:text-red-500"
          >
            New
          </a>
          <a
            href=""
            className="item-2 text-base font-semibold text-gray-600 hover:text-red-500"
          >
            Deals
          </a>
          <a
            href=""
            className="item-3 text-base font-semibold text-gray-600 hover:text-red-500"
          >
            Shop by brand
          </a>
          <button
            className="left-search-btn right-4 text-red-500"
            onClick={searchShowHandler}
          >
            <AiOutlineSearch size={20} />
          </button>
          <button className="side-menu" onClick={menuDropdownHandler}>
            <BsGrid3X3Gap size={20} className="text-red-500" />
          </button>
          <a href="" className="item-4">
            <FaUserCircle size={20} className="text-red-500" />
          </a>
        </div>
      </div>
      {isMenuShow ? (
        <div className="bg-white rounded-xl px-4 py-1 mx-4 mt-2 space-y-3">
          <a href="" className="block text-gray-600">
            Show
          </a>
          <a href="" className="block text-gray-600">
            brand
          </a>
          <a href="" className="block text-gray-600">
            shop by brand
          </a>
        </div>
      ) : (
        ""
      )}

      {isSearchShow ? (
        <div className="bg-white rounded-xl px-5 py-3 mx-4 mt-2 space-x-3 flex items-center">
          <AiOutlineSearch />
          <input type="" placeholder="search..." />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default TopNav;
