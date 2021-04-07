import React, { useState } from "react";
import "../css/style.css";
import Sidebar from "../common/sidebar/Sidebar";
import Topnav from "../common/topnav/Topnav";
import ProductContent from "./products/ProductContent";
import ProductDetail from "./products/ProductDetail";

function Index() {
  let [sidebarActive, setSidebarActive] = useState();
  const sidebarHandler = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <>
      <div className="wrapper">
        <Sidebar sidebarActive={sidebarActive} />
        <div id="content">
          <Topnav sidebarHandler={sidebarHandler} />
          <ProductContent />
        </div>
        <ProductDetail />
      </div>
    </>
  );
}

export default Index;
