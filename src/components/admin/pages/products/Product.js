import React from "react";

function Product() {
  return (
    <>
      <tr>
        <th scope="row">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
          </div>
        </th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td data-toggle="modal" data-target="#exampleModal">
          <img src="images/p1.png" width="50" alt="product" />
        </td>
      </tr>
    </>
  );
}

export default Product;
