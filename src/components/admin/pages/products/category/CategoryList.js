import React from "react";

function CategoryList() {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped mt-3 w-50">
          <thead>
            <tr>
              <th scope="col">Categories</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sweets</td>
            </tr>
            <tr>
              <td>Dairy</td>
            </tr>
            <tr>
              <td>Fruits</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CategoryList;
