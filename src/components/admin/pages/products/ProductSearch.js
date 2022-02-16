/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useProduct } from "../../../../context/product/ProductProvider";

function ProductSearch() {
  const [searchKey, setSearchKey] = useState("");

  const { serachByHandler } = useProduct();

  useEffect(() => {
    serachByHandler(searchKey);
  }, [searchKey]);

  const serachKeyHandler = (e) => {
    // console.log(e.target.value);
    setSearchKey(e.target.value);
  };
  return (
    <>
      <div className="input-group mb-0">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Search by name or tag
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={searchKey}
          onChange={serachKeyHandler}
        />
      </div>
    </>
  );
}

export default ProductSearch;
