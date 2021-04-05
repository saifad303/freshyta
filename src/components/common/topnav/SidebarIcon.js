import React from "react";

function SidebarIcon({ classHandler }) {
  return (
    <>
      <input type="checkbox" id="openSidebarMenu" onClick={classHandler} />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner top"></div>
        <div className="spinner middle"></div>
        <div className="spinner bottom"></div>
      </label>
    </>
  );
}

export default SidebarIcon;
