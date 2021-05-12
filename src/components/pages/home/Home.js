import React, { useState } from "react";
import TopNav from "../common/TopNav";
import Relevencies from "../common/Relevencies";
import HomeContainer from "./HomeContainer";
import LeftSideMenu from "../common/LeftSideMenu";

function Home() {
  const [isSidebar, setIsSidebar] = useState(false);
  const sidebarMenuHandler = () => {
    setIsSidebar(!isSidebar);
  };
  return (
    <>
      <TopNav sidebarMenuHandler={sidebarMenuHandler} />
      {/* <div className="flex items-start">
        {
          isSidebar
        }
        <LeftSideMenu />
        <div> */}
      <Relevencies />
      <HomeContainer />
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Home;
