import React from "react";
import { useProduct } from "../../../../context/product/ProductProvider";

function ProdcutLoadMoreBtn() {
  const style = {
    display: "block",
    width: "100%",
    border: "none",
    backgroundColor: "#EE4054",
    padding: "14px 28px",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  };
  const { LoadMoreHandler, isEmpty, loadMoreLoading } = useProduct();
  return (
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-lg-12">
          {isEmpty ? (
            <button type="button" style={style} disabled>
              No More Data Available
            </button>
          ) : loadMoreLoading ? (
            <button type="button" style={style} disabled>
              Loading...
            </button>
          ) : (
            <button type="button" style={style} onClick={LoadMoreHandler}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProdcutLoadMoreBtn;
