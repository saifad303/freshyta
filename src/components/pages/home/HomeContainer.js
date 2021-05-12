import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import "./main.css";
import { useProduct } from "../../../context/product/ProductProvider";

function HomeContainer() {
  let { view, setLimithandler, isSession } = useProduct();
  let [cartInfo, setCartInfo] = useState([]);
  useEffect(() => {
    setLimithandler(10);
  }, [view]);

  useEffect(() => {
    // console.log(sessionStorage.getItem("products"));
  }, [isSession]);

  return (
    <>
      <div className="main-content">
        <div className="content-body bg-white px-6 pt-6 mx-3 rounded-xl flex content-start flex-wrap">
          {view
            ? view.map((product) => {
                return (
                  <div key={product.id}>
                    <Card {...product} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      {/* <pre>{JSON.stringify(view, null, 4)}</pre> */}
    </>
  );
}

export default HomeContainer;
