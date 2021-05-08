import React from "react";
import Card from "../common/Card";
import "./main.css";

function HomeContainer() {
  return (
    <>
      <div className="main-content">
        <div className="content-body bg-white px-6 py-6 mx-3 rounded-xl flex content-start flex-wrap">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
            return <Card />;
          })}
        </div>
      </div>
    </>
  );
}

export default HomeContainer;
