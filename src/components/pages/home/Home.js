import React from "react";
import HomeContainer from "./HomeContainer";

function Home() {
  return (
    <>
      <section className="product-area">
        <div className="container-fluid">
          <div className="product-title">
            <h3>Fruit {"&"} Veg</h3>
          </div>
          <HomeContainer />
        </div>
        {/* <!-- container --> */}
      </section>
    </>
  );
}

export default Home;
