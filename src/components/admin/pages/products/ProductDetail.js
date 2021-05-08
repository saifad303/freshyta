import React, { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Modal } from "react-bootstrap";

function ProductDetail({ editHandler, handleClose, show, dataToEdit }) {
  useEffect(() => {
    console.log(dataToEdit);
  }, [dataToEdit]);
  return (
    <>
      {dataToEdit ? (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            animation={false}
          >
            <Modal.Body>
              <div className="modal-dialog">
                <div className="modal-content detail-modal">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={handleClose}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div className="modal-body">
                    <div className="product d-flex">
                      <div className="proDetailImg">
                        <img src={dataToEdit.smallImg} alt="Product" />
                      </div>
                      {/* <!-- proDetailImg --> */}
                      <div className="proDetailContent">
                        <p className="detitle">{dataToEdit.title}</p>
                        <p className="deunit">2 {dataToEdit.unit}</p>
                        <p className="deprice">${dataToEdit.price}</p>
                        <p className="deprice">
                          Category: {dataToEdit.category}
                        </p>
                        <p className="destock">Available in stock</p>
                      </div>
                      {/* <!-- proDetailContent --> */}
                    </div>
                    {/* <!-- product --> */}

                    <div className="proDescrip">
                      <h4>About this Product</h4>
                      <p>{dataToEdit.description}</p>
                    </div>
                    {/* <!-- proDescrip --> */}

                    <button
                      className="btn btn-info"
                      onClick={(e) => {
                        e.preventDefault();
                        editHandler();
                      }}
                    >
                      <AiFillEdit />
                    </button>
                  </div>
                  {/* <!-- modal body --> */}
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProductDetail;
