import React from "react";
import Product from "./Product";
import ProductTableHead from "./ProductTableHead";
import ProductSearch from "./ProductSearch";
import ProdcutLoadMoreBtn from "./ProdcutLoadMoreBtn";

function ProductsList() {
  return (
    <>
      <ProductSearch />
      <div className="table-responsive">
        <table className="table table-striped mt-3">
          <thead>
            <ProductTableHead />
          </thead>
          <tbody>
            <Product />
          </tbody>
        </table>
        <ProdcutLoadMoreBtn />
      </div>
    </>
  );
}

export default ProductsList;
