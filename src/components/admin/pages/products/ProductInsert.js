import React from "react";

function ProductInsert() {
  return (
    <>
      <form>
        <div className="ml-auto">
          <div className="form-group row mt-5">
            <label htmlFor="inputText" className="col-md-2 col-form-label">
              Name
            </label>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="inputText" />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="col-md-2 col-form-label"
            >
              Description
            </label>
            <div className="col-sm-4">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputNumber" className="col-md-2 col-form-label">
              Price
            </label>
            <div className="col-sm-4">
              <input type="number" className="form-control" id="inputNumber" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputTag" className="col-md-2 col-form-label">
              Tags
            </label>
            <div className="col-sm-4">
              <select
                className="form-control selectpicker"
                multiple
                data-live-search="true"
                onChange={() => {}}
              >
                <option value="/">Mustard</option>
                <option value="/">Ketchup</option>
                <option value="/">Relish</option>
                <option value="/">Orenge</option>
                <option value="/">Apple</option>
                <option value="/">Mustard</option>
                <option value="/">Ketchup</option>
                <option value="/">Relish</option>
                <option value="/">Orenge</option>
                <option value="/">Apple</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputState" className="col-md-2 col-form-label">
              Cetegory
            </label>
            <div className="col-sm-4">
              <select
                id="inputState"
                className="form-control"
                onChange={() => {}}
              >
                <option value="/">Choose...</option>
                <option value="/">hasan</option>
                <option value="/">helo</option>
                <option value="/">opps</option>
                <option value="/">billa</option>
                <option value="/">tata</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputState" className="col-md-2 col-form-label">
              Sub-Cetegory
            </label>
            <div className="col-sm-4">
              <select
                id="inputState"
                className="form-control"
                onChange={() => {}}
              >
                <option value="/">Choose...</option>
                <option value="/">hasan</option>
                <option value="/">helo</option>
                <option value="/">opps</option>
                <option value="/">billa</option>
                <option value="/">tata</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputState" className="col-md-2 col-form-label">
              Unit
            </label>
            <div className="col-sm-4">
              <select
                id="inputState"
                className="form-control"
                onChange={() => {}}
              >
                <option value="/">Choose...</option>
                <option value="/">Kg</option>
                <option value="/">Litter</option>
                <option value="/">gm</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputState" className="col-md-2 col-form-label">
              City
            </label>
            <div className="col-sm-4">
              <select
                id="inputState"
                className="form-control"
                onChange={() => {}}
              >
                <option value="/">Choose...</option>
                <option value="/">hasan</option>
                <option value="/">helo</option>
                <option value="/">opps</option>
                <option value="/">billa</option>
                <option value="/">tata</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="exampleFormControlFile1" className="col-md-2">
              Produc pic
            </label>
            <div className="col-sm-4">
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btnSign">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ProductInsert;
