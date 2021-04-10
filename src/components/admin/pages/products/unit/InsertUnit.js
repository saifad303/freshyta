import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useUnit } from "../../../../../context/unit/UnitProvider";

function InsertUnit() {
  let { insert } = useUnit();
  let style = {
    marginLeft: "200px",
    color: "red",
  };
  let validationSchema = object({
    unit: string().required(),
  });
  let initialValues = {
    unit: "",
  };
  function onSubmit(values, submitProps) {
    console.log("Form data", values);
    console.log("submitProps", submitProps);
    insert({ ...values, id: new Date().getTime() });
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="ml-auto">
            <div className="form-group row mt-5">
              <label htmlFor="inputText" className="col-md-2 col-form-label">
                Unit
              </label>
              <div className="col-sm-4">
                <Field
                  type="text"
                  className="form-control"
                  id="inputText"
                  name="unit"
                />
              </div>
              <button type="submit" className="btn btn-primary btnSign">
                Submit
              </button>
            </div>
            <div style={style}>
              <ErrorMessage name="unit" />
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default InsertUnit;
