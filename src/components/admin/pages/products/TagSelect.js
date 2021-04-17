import React, { useEffect, useState } from "react";
import Select from "react-select";
import { database } from "../../../../firebase/database";

function TagSelect({ value, onChange, onBlur, error, touched }) {
  let [tag, setTag] = useState();

  useEffect(() => {
    database.ref("Tags").on("value", (snap) => {
      console.log(snap.val());
      let tags = snap.val();
      let allTag = [];

      for (let id in tags) {
        allTag.push({ label: tags[id].tag, value: tags[id].tag });
      }
      // console.log(allTag);

      setTag(allTag);
    });
  }, []);

  //   let handleChange = (value) => {
  //     // this is going to call setFieldValue and manually update values.topcis
  //     onChange("tags", value);
  //   };
  //   let handleBlur = () => {
  //     // this is going to call setFieldTouched and manually update touched.topcis
  //     onBlur("tags", true);
  //   };

  return (
    <>
      <Select
        options={tag}
        isMulti
        closeMenuOnSelect={false}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {!!error && touched && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
}

export default TagSelect;
