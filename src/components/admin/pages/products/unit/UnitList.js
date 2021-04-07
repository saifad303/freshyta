import React from "react";

function UnitList() {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped mt-3 w-50">
          <thead>
            <tr>
              <th scope="col">Unit title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kg</td>
            </tr>
            <tr>
              <td>gm</td>
            </tr>
            <tr>
              <td>Liter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UnitList;
