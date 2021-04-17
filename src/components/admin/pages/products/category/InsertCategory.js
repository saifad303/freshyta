import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useCategory } from "../../../../../context/category/CategoryProvider";

function InsertCategory() {
  let { insert } = useCategory();
  let [loading, setLoading] = useState(false);
  let style = {
    marginLeft: "200px",
    color: "red",
  };
  let validationSchema = object({
    category: string().required(),
  });
  let initialValues = {
    category: "",
  };
  async function onSubmit(values, submitProps) {
    setLoading(true);
    console.log("Form data", values);
    console.log("submitProps", submitProps);
    try {
      await insert({ ...values });
      submitProps.setSubmitting(false);
      submitProps.resetForm();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
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
                Category
              </label>
              <div className="col-sm-4">
                <Field
                  type="text"
                  className="form-control"
                  id="inputText"
                  name="category"
                />
              </div>
              {loading ? (
                <button
                  type="submit"
                  className="btn btn-primary btnSign"
                  disabled
                >
                  Loading...
                </button>
              ) : (
                <button type="submit" className="btn btn-primary btnSign">
                  Submit
                </button>
              )}
            </div>
            <div style={style}>
              <ErrorMessage name="category" />
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default InsertCategory;
