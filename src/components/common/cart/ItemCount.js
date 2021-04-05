import React from "react";

function ItemCount() {
  return (
    <>
      <div className="item-clear">
        <div className="itemInCart">
          <span>4</span> Item in cart
        </div>
        <div className="clear">
          <a href="#">Clear</a>
        </div>
      </div>
    </>
  );
}

export default ItemCount;
