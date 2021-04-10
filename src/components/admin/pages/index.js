import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "../css/style.css";
import Sidebar from "../common/sidebar/Sidebar";
import Topnav from "../common/topnav/Topnav";
import ProductContent from "./products/ProductContent";
import ProductDetail from "./products/ProductDetail";
import Dashboard from "./dashboard/Dashboard";

function Index() {
  let [sidebarActive, setSidebarActive] = useState();
  let match = useRouteMatch();
  const sidebarHandler = () => {
    setSidebarActive(!sidebarActive);
  };
  useEffect(() => {
    console.log(match);
  }, []);
  return (
    <Switch>
      <>
        <div className="wrapper">
          <Sidebar sidebarActive={sidebarActive} />
          <div id="content">
            <Topnav sidebarHandler={sidebarHandler} />
            <Route path={`${match.path}`} component={Dashboard} exact />
            <Route path={`${match.path}/products`} component={ProductContent} />
          </div>
          <ProductDetail />
        </div>
      </>
    </Switch>
  );
}

export default Index;
