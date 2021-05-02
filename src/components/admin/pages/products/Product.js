import React from "react";
import { useProduct } from "../../../../context/product/ProductProvider";

function Product() {
  const { view } = useProduct();

  return (
    <>
      {view
        ? view.map((value) => {
            return (
              <tr key={value.id}>
                <td scope="row">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                  </div>
                </td>
                <td>{value.title}</td>
                <td>${value.price}</td>
                <td>{value.category}</td>
                <td data-toggle="modal" data-target="#exampleModal">
                  <img src={value.smallImg} width="50" alt="product" />
                </td>
              </tr>
            );
          })
        : ""}
    </>
  );
}

export default Product;
