import React, { useEffect, useState } from "react";
import Select from "react-select";
import { database } from "../../../../firebase/database";

function UnitSelect({ value, onChange, onBlur, error, touched }) {
  let [unit, setUnit] = useState();

  useEffect(() => {
    database.ref("Units").on("value", (snap) => {
      console.log(snap.val());
      let units = snap.val();
      let allUnit = [];

      for (let id in units) {
        // console.log(units[id].unit);
        allUnit.push({ label: units[id].unit, value: units[id].unit });
      }
      console.log(allUnit);

      setUnit(allUnit);
    });
  }, []);
  return (
    <>
      <Select
        options={unit}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {!!error && touched && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default UnitSelect;
