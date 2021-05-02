import React from "react";
import ProductList from "./ProductList";
import ProductInsert from "./ProductInsert";
import UnitContent from "./unit/UnitContent";
import CategoryContent from "./category/CategoryContent";
import TagContent from "./tags/TagContent";

function Products() {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Product List
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Insert new product
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#unit"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Unit
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#category"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Category
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#tags"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Tags
          </a>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <ProductList />
        </div>

        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <ProductInsert />
        </div>

        <div
          className="tab-pane fade"
          id="unit"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <UnitContent />
        </div>
        <div
          className="tab-pane fade"
          id="category"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <CategoryContent />
        </div>
        <div
          className="tab-pane fade"
          id="tags"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <TagContent />
        </div>
      </div>
    </>
  );
}

export default Products;
