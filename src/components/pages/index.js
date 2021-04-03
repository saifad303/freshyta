import React from "react";
import Home from "../pages/home/Home";
import ProductDetail from "../common/productdetail/ProductDetail";
import Cart from "../common/cart/Cart";
import TopNav from "../common/topnav/TopNav";
import SignIn from "../common/signin/SignIn";
import Categories from "../common/relevancies/Categories";

function index() {
  return (
    <div>
      <div className="wrapper">
        {/* <!--sidebarMenu  --> */}
        <TopNav />
        <div className="main">
          <Categories />
          <Home />
        </div>
        <Cart />
        <SignIn />
        <ProductDetail />
      </div>
    </div>
  );
}

export default index;
