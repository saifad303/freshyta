/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useCategory } from "../../../../../context/category/CategoryProvider";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function CategoryList() {
  let { view, editApproved, update, deleteCat, loading, editDisApproved } =
    useCategory();

  let [editCategory, setEditCategory] = useState("");
  let [category, setCategory] = useState("");
  let [submitBtnVisible, setSubmitBtnVisible] = useState(true);
  let [categoryEmptyError, setCategoryEmptyError] = useState("");

  useEffect(() => {
    // console.log("My View = ", view);

    let found = view.find((v) => {
      return v.editable === true;
    });

    // console.log("Found = ", found);
    setEditCategory(found);
    if (found) {
      setCategory(found.category);
    }
  }, [view]);

  useEffect(() => {
    if (editCategory && editCategory.category === category) {
      // console.log(true);
      setSubmitBtnVisible(true);
    } else {
      setSubmitBtnVisible(false);
    }
  }, [editCategory]);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("Edit Unit = ", editUnit);
    if (editCategory && editCategory.category === "") {
      setCategoryEmptyError("This field is required");
      return;
    }
    update(editCategory);
    setCategoryEmptyError("");
    // setEditUnit({ ...editUnit });
  };

  const editCategoryHandler = (e) => {
    setEditCategory({ ...editCategory, category: e.target.value });
  };

  const deleteCatHandler = (id) => {
    deleteCat(id);
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
                                  value={
                                    editCategory
                                      ? `${editCategory.category}`
                                      : ""
                                  }
                                  onChange={editCategoryHandler}
                                />
                              </div>
                              {submitBtnVisible ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setCategoryEmptyError("");
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
                            {categoryEmptyError ? (
                              <>
                                <p style={{ color: "red" }}>
                                  {categoryEmptyError}
                                </p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        </td>
                      ) : (
                        <td>{v.category}</td>
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
                            <a href="#" onClick={() => deleteCatHandler(v.id)}>
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

export default CategoryList;
