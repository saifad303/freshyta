import React, { useEffect, useState } from "react";
import { useUnit } from "../../../../../context/unit/UnitProvider";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function UnitList() {
  let {
    view,
    editApproved,
    update,
    deleteUnit,
    loading,
    editDisApproved,
  } = useUnit();

  let [editUnit, setEditUnit] = useState("");
  let [unit, setUnit] = useState("");
  let [submitBtnVisible, setSubmitBtnVisible] = useState(true);
  let [unitEmptyError, setUnitEmptyError] = useState("");

  useEffect(() => {
    // console.log("My View = ", view);

    let found = view.find((v) => {
      return v.editable === true;
    });

    // console.log("Found = ", found);
    setEditUnit(found);
    if (found) {
      setUnit(found.unit);
    }
  }, [view]);

  useEffect(() => {
    if (editUnit && editUnit.unit === unit) {
      // console.log(true);
      setSubmitBtnVisible(true);
    } else {
      setSubmitBtnVisible(false);
    }
  }, [editUnit]);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("Edit Unit = ", editUnit);
    if (editUnit && editUnit.unit === "") {
      setUnitEmptyError("This field is required");
      return;
    }
    update(editUnit);
    setUnitEmptyError("");
    // setEditUnit({ ...editUnit });
  };

  const editUnitHandler = (e) => {
    setEditUnit({ ...editUnit, unit: e.target.value });
  };

  const deleteUnitHandler = (id) => {
    deleteUnit(id);
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
                                  value={editUnit ? `${editUnit.unit}` : ""}
                                  onChange={editUnitHandler}
                                />
                              </div>
                              {submitBtnVisible ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setUnitEmptyError("");
                                      editDisApproved();
                                    }}
                                  >
                                    X
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button type="submit">Submit</button>
                                </>
                              )}
                            </form>
                            {unitEmptyError ? (
                              <>
                                <p style={{ color: "red" }}>{unitEmptyError}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        </td>
                      ) : (
                        <td>{v.unit}</td>
                      )}
                      {v.editable ? (
                        ""
                      ) : (
                        <>
                          <td>
                            <a href="#" onClick={() => editApproved(v.id)}>
                              <AiFillEdit size={20} />
                            </a>
                          </td>
                          <td>
                            <a href="#" onClick={() => deleteUnitHandler(v.id)}>
                              <AiFillDelete size={20} />
                            </a>
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
