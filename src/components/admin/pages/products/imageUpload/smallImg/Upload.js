import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import axios from "axios";
import FileInfo from "./FileInfo";

function Upload({ file, onDelete, onUpload }) {
  let [progress, setProgress] = useState();
  useEffect(() => {
    function upload() {
      uploadFile(file).then((res) => {
        console.log(res);
        onUpload(res.data.url, file, res.data.delete_token);
      });
    }

    upload();
  }, []);

  function uploadFile(file) {
    const url = "https://api.cloudinary.com/v1_1/deivsv7ca/image/upload";
    const key = "tyk84ocq";

    const config = {
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percentCompleted);
        setProgress(percentCompleted);
      },
    };

    let data = new FormData();
    data.append("file", file);
    data.append("upload_preset", key);
    data.append("folder", "myimage");

    return axios.post(url, data, config).then((res) => {
      console.log(res);
      return res;
    });
  }

  return (
    <>
      <FileInfo onDelete={() => onDelete(file)} name={file.name} />
      <ProgressBar now={progress} label={`${progress}%`} srOnly />
      {progress === 100 ? <p>Upload is completed</p> : ""}
    </>
  );
}

export default Upload;
