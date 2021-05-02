import React from "react";
import FileInfo from "./FileInfo";
import { ProgressBar } from "react-bootstrap";

function UploadError({ file, onDelete, errors }) {
  return (
    <>
      <FileInfo file={file} onDelete={() => onDelete(file)} />
      <div className="alert alert-danger" role="alert">
        ERROR
      </div>
      <ProgressBar variant="danger" now={100} label={`${100}%`} srOnly />
      <div>
        {errors.map((error, index) => {
          return (
            <p style={{ color: "red" }} key={index}>
              {error.message}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default UploadError;
