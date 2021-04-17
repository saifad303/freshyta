import React, { createContext, useContext, useEffect, useState } from "react";
import { database } from "../../firebase/database";

let TagContext = createContext();

export const useTag = () => {
  return useContext(TagContext);
};

function TagProvider({ children }) {
  let [view, setView] = useState([]);
  let [loading, setLoading] = useState(false);

  let insert = (tag) => {
    // console.log("My unit = ", unit);
    return database.ref("Tags").push(tag);
  };

  let editApproved = (id) => {
    // console.log("My ID = ", id);
    let data = view.map((v) => {
      if (v.id === id) {
        return { ...v, editable: true };
      }

      return { ...v, editable: false };
    });

    // console.log(data);
    setView(data);
  };

  let editDisApproved = (id) => {
    // console.log("editDisApproved = ", id);

    let data = view.map((v) => {
      return { ...v, editable: false };
    });

    // console.log("DT = ", data);

    setView(data);
  };

  let update = (tag) => {
    return database.ref("Tags").child(tag.id).update({
      tag: tag.tag,
    });
  };

  let deleteTag = (id) => {
    return database.ref("Tags").child(id).remove();
  };

  useEffect(() => {
    database.ref("Tags").on("value", function (snap) {
      // console.log(snap.val());
      let tags = snap.val();
      let allTag = [];

      for (let id in tags) {
        allTag.push({ id, ...tags[id], editable: false });
      }

      setView(allTag);
    });
  }, []);

  let value = {
    insert,
    view,
    editApproved,
    update,
    deleteTag,
    loading,
    editDisApproved,
  };

  return <TagContext.Provider value={value}>{children}</TagContext.Provider>;
}
export default TagProvider;
