import React, { useState } from "react";
import { useProduct } from "../../../../context/product/ProductProvider";
import ProductDetail from "./ProductDetail";

function Product() {
  const { view, setLimithandler } = useProduct();
  const [show, setShow] = useState(false);
  const [dataToEdit, setDataToEdit] = useState();

  setLimithandler(5);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    // console.log(data);
    setDataToEdit(data);
    setShow(true);
  };

  const editHandler = () => {};

  return (
    <>
      {view
        ? view.map((value) => {
            return (
              <tr key={value.id} onClick={() => handleShow(value)}>
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
                <td data-target="#exampleModal">
                  <img src={value.smallImg} width="50" alt="product" />
                </td>
              </tr>
            );
          })
        : ""}
      <ProductDetail
        editHandler={editHandler}
        handleClose={handleClose}
        show={show}
        dataToEdit={dataToEdit}
      />
    </>
  );
}

export default Product;
