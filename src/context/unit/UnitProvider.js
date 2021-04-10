import React, { createContext, useContext, useEffect, useState } from "react";
import { database } from "../../firebase/database";

let UnitContext = createContext();

export const useUnit = () => {
  return useContext(UnitContext);
};

function UnitProvider({ children }) {
  let [view, setView] = useState([]);
  let insert = (unit) => {
    // console.log("My unit = ", unit);
    return database.ref("Units").push(unit);
  };

  let editApproved = (id) => {
    console.log("My ID = ", id);
    let data = view.map((v) => {
      if (v.id === id) {
        return { ...v, editable: true };
      }

      return { ...v, editable: false };
    });

    // console.log(data);
    setView(data);
  };

  useEffect(() => {
    database.ref("Units").on("value", function (snap) {
      console.log(snap.val());
      let units = snap.val();
      let allUnit = [];

      for (let unit in units) {
        allUnit.push({ unit: unit, ...units[unit], editable: false });
      }

      console.log(allUnit);

      setView(allUnit);
    });
  }, []);
  let value = { insert, view, editApproved };
  return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>;
}

export default UnitProvider;
