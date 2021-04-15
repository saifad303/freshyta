import React, { createContext, useContext, useEffect, useState } from "react";
import { database } from "../../firebase/database";

let CategoryContext = createContext();

export const useCategory = () => {
  return useContext(CategoryContext);
};

function CategoryProvider({ children }) {
  let [view, setView] = useState([]);
  let [loading, setLoading] = useState(false);

  let insert = (category) => {
    // console.log("My unit = ", unit);
    return database.ref("Categories").push(category);
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

  let update = (category) => {
    return database.ref("Categories").child(category.id).update({
      category: category.category,
    });
  };

  let deleteCat = (id) => {
    return database.ref("Categories").child(id).remove();
  };

  useEffect(() => {
    database.ref("Categories").on("value", function (snap) {
      // console.log(snap.val());
      let categories = snap.val();
      let allCat = [];

      for (let id in categories) {
        allCat.push({ id, ...categories[id], editable: false });
      }

      setView(allCat);
    });
  }, []);

  let value = {
    insert,
    view,
    editApproved,
    update,
    deleteCat,
    loading,
    editDisApproved,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
export default CategoryProvider;
