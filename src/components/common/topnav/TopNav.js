import React from "react";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import SidebarIcon from "./SidebarIcon";

function TopNav() {
  return (
    <>
      <Menu />
      {/* <!-- menu area end here --> */}
      <SidebarIcon />
      <Sidebar />
    </>
  );
}

export default TopNav;
