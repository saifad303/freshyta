import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number, array } from "yup";
import TagSelect from "./TagSelect";
import CategorySelect from "./CategorySelect";
import UnitSelect from "./UnitSelect";
import { useProduct } from "../../../../context/product/ProductProvider";
import ImgUploader from "./imageUpload/ImgUploader";

function ProductInsert() {
  let { insert } = useProduct();
  let [loading, setLoading] = useState(false);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  let initialValues = {
    title: "",
    description: "",
    price: "",
    tags: [],
    category: "",
    unit: "",
  };

  let validationSchema = object({
    title: string().required(),
    description: string().required(),
    price: number().required(),
    tags: array()
      .min(3, "Pick at least 3 tags")
      .of(
        object().shape({
          label: string().required(),
          value: string().required(),
        })
      ),
    category: object().required(),
    unit: object().required(),
  });

  async function onSubmit(values, submitProps) {
    // setLoading(true);
    console.log("Form data", values);
    let category = values.category.value;
    let unit = values.unit.value;
    let tags = values.tags.map((tag) => {
      return { tag: tag.value };
    });

    let finalSubmit = {
      ...values,
      category,
      unit,
      tags,
    };

    // console.log("FinalSubmitProps = ", finalSubmit);
    // console.log("submitProps = ", submitProps);
    try {
      await insert({ ...finalSubmit });
      submitProps.setSubmitting(false);
      submitProps.resetForm();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  let errorColor = {
    color: "red",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {({ errors, values, setFieldValue, touched, setFieldTouched }) => {
          return (
            <Form>
              <div className="ml-auto">
                <div className="form-group row mt-5">
                  <label
                    htmlFor="inputText"
                    className="col-md-2 col-form-label"
                  >
                    Product title
                  </label>
                  <div className="col-sm-4">
                    <Field
                      type="text"
                      className="form-control"
                      id="inputText"
                      name="title"
                    />
                    {errors && touched ? (
                      <p style={errorColor}>{errors.title}</p>
                    ) : null}
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="col-md-2 col-form-label"
                  >
                    Product description
                  </label>
                  <div className="col-sm-4">
                    <Field
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="description"
                      as="textarea"
                    />
                    {errors && touched ? (
                      <p style={errorColor}>{errors.description}</p>
                    ) : null}
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="inputNumber"
                    className="col-md-2 col-form-label"
                  >
                    Price
                  </label>
                  <div className="col-sm-4">
                    <Field
                      type="number"
                      className="form-control"
                      id="inputNumber"
                      name="price"
                    />
                    {errors && touched ? (
                      <p style={errorColor}>{errors.price}</p>
                    ) : null}
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="inputTag" className="col-md-2 col-form-label">
                    Tags
                  </label>
                  <div className="col-sm-4">
                    <TagSelect
                      value={values.tags}
                      onChange={(value) => setFieldValue("tags", value)}
                      onBlur={() => setFieldTouched("tags", true)}
                      error={errors.tags}
                      touched={touched.tags}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="inputState"
                    className="col-md-2 col-form-label"
                  >
                    Product Cetegory
                  </label>
                  <div className="col-sm-4">
                    <CategorySelect
                      value={values.category}
                      onChange={(value) => setFieldValue("category", value)}
                      onBlur={() => setFieldTouched("category", true)}
                      error={errors.category}
                      touched={touched.category}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="inputState"
                    className="col-md-2 col-form-label"
                  >
                    Units
                  </label>
                  <div className="col-sm-4">
                    <UnitSelect
                      value={values.unit}
                      onChange={(value) => setFieldValue("unit", value)}
                      onBlur={() => setFieldTouched("unit", true)}
                      error={errors.unit}
                      touched={touched.unit}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="exampleFormControlFile1" className="col-md-2">
                    Product picture
                  </label>

                  <ImgUploader />
                </div>

                {loading ? (
                  <>
                    <button
                      type="submit"
                      className="btn btn-primary btnSign"
                      disabled
                    >
                      Loading...
                    </button>
                  </>
                ) : (
                  <>
                    <button type="submit" className="btn btn-primary btnSign">
                      Submit
                    </button>
                  </>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default ProductInsert;
