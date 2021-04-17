import React, { useEffect, useState } from "react";
import { useTag } from "../../../../../context/tag/TagProvider";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function TagList() {
  let {
    view,
    editApproved,
    update,
    deleteTag,
    loading,
    editDisApproved,
  } = useTag();

  let [editTag, setEditTag] = useState("");
  let [tag, setTag] = useState("");
  let [submitBtnVisible, setSubmitBtnVisible] = useState(true);
  let [tagEmptyError, setTagEmptyError] = useState("");

  useEffect(() => {
    // console.log("My View = ", view);

    let found = view.find((v) => {
      return v.editable === true;
    });

    // console.log("Found = ", found);
    setEditTag(found);
    if (found) {
      setTag(found.tag);
    }
  }, [view]);

  useEffect(() => {
    if (editTag && editTag.tag === tag) {
      // console.log(true);
      setSubmitBtnVisible(true);
    } else {
      setSubmitBtnVisible(false);
    }
  }, [editTag]);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("Edit Unit = ", editUnit);
    if (editTag && editTag.tag === "") {
      setTagEmptyError("This field is required");
      return;
    }
    update(editTag);
    setTagEmptyError("");
    // setEditUnit({ ...editUnit });
  };

  const editTagHandler = (e) => {
    setEditTag({ ...editTag, tag: e.target.value });
  };

  const deleteTagHandler = (id) => {
    deleteTag(id);
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
                                  value={editTag ? `${editTag.tag}` : ""}
                                  onChange={editTagHandler}
                                />
                              </div>
                              {submitBtnVisible ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setTagEmptyError("");
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
                            {tagEmptyError ? (
                              <>
                                <p style={{ color: "red" }}>{tagEmptyError}</p>
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        </td>
                      ) : (
                        <td>{v.tag}</td>
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
                            <a href="#" onClick={() => deleteTagHandler(v.id)}>
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

export default TagList;
