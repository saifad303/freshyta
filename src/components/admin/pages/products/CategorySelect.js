import React, { useEffect, useState } from "react";
import Select from "react-select";
import { database } from "../../../../firebase/database";

function CategorySelect({ value, onChange, onBlur, error, touched }) {
  let [category, setCategory] = useState();

  useEffect(() => {
    database.ref("Categories").on("value", (snap) => {
      console.log(snap.val());
      let categories = snap.val();
      let allCat = [];

      for (let id in categories) {
        allCat.push({
          label: categories[id].category,
          value: categories[id].category,
        });
      }
      //   console.log(allCat);

      setCategory(allCat);
    });
  }, []);
  return (
    <>
      <Select
        options={category}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {!!error && touched && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default CategorySelect;
