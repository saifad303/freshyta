import React from "react";
import Product from "./Product";
import ProductTableHead from "./ProductTableHead";

function ProductsList() {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped mt-3">
          <thead>
            <ProductTableHead />
          </thead>
          <tbody>
            <Product />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductsList;
