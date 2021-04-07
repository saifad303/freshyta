import React from "react";

function ProductTableHead() {
  return (
    <>
      <tr>
        <th scope="col">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              All
            </label>
          </div>
        </th>
        <th scope="col">Product name</th>
        <th scope="col">Country</th>
        <th scope="col">Total sell</th>
        <th scope="col">Image</th>
      </tr>
    </>
  );
}

export default ProductTableHead;
