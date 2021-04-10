import React, { useEffect, useState } from "react";
import { useUnit } from "../../../../../context/unit/UnitProvider";

function UnitList() {
  let { view, editApproved } = useUnit();
  let [editUnit, setEditUnit] = useState("");
  useEffect(() => {
    console.log(view);
    let found = view.find((v) => {
      return v.editable === true;
    });
    // console.log("Found = ", found);
    setEditUnit(found);
  }, [view]);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setEditUnit("");
  };
  const editUnitHandler = (e) => {
    console.log(e.target.value);
    setEditUnit(e.target.value);
  };
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped mt-3 w-50">
          <thead>
            <tr>
              <th scope="col">Unit title</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {view
              ? view.map((v, index) => {
                  return (
                    <tr key={index}>
                      {v.editable ? (
                        <td>
                          <>
                            <form onSubmit={onSubmit}>
                              <div className="form-group">
                                <input
                                  type="text"
                                  value={editUnit ? editUnit.unit : ""}
                                  onChange={editUnitHandler}
                                />
                              </div>
                              <button type="submit">Submit</button>
                            </form>
                          </>
                        </td>
                      ) : (
                        <td>
                          {v.unit} {v.editable ? "true" : "false"}
                        </td>
                      )}
                      {v.editable ? (
                        ""
                      ) : (
                        <>
                          <td>
                            <a href="#" onClick={() => editApproved(v.id)}>
                              edit
                            </a>
                          </td>
                          <td>
                            <a href="#">delete</a>
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UnitList;
