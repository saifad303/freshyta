import React from "react";
import Sidebar from "./Sidebar";
import Menu from "./Menu";

function TopNav() {
  return (
    <>
      <Menu />
      {/* <!-- menu area end here --> */}
      <Sidebar />
    </>
  );
}

export default TopNav;
