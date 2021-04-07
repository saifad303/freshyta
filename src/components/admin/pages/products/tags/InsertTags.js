import React from "react";

function InsertTags() {
  return (
    <>
      <form>
        <div className="ml-auto">
          <div className="form-group row mt-5">
            <label htmlFor="inputText" className="col-md-2 col-form-label">
              Tag title
            </label>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="inputText" />
            </div>
            <button type="submit" className="btn btn-primary btnSign">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default InsertTags;
