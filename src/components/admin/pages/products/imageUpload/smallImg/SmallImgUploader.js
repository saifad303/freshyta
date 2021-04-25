import React, { useState, useCallback, useMemo } from "react";
import axios from "axios";
import {
  baseStyle,
  activeStyle,
  acceptStyle,
  rejectStyle,
} from "../dropzoneStyle";
import Upload from "./Upload";
import { useDropzone } from "react-dropzone";

function SmallImgUploader() {
  let [files, setFiles] = useState([]);

  const onDrop = useCallback((accFiles, rejFiles) => {
    // console.log("acc Files", accFiles);
    const mappedAcc = accFiles.map((file) => {
      return { file, errors: [] };
    });
    const mappedRej = rejFiles.map((error) => {
      // console.log([...error.errors]);
      return { ...error };
    });
    // console.log(mappedAcc);
    setFiles([...mappedAcc, ...mappedRej]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
    // maxSize: 300 * 1024, // 300KB
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  function onDelete() {}

  const onUpload = (url, file, delToken) => {
    // console.log(url);
    // console.log(file);

    setFiles((curr) => {
      return curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url, delToken };
        }
        return fw;
      });
    });
  };

  function onDelete(file) {
    // console.log(file);
    const url = "https://api.cloudinary.com/v1_1/deivsv7ca/delete_by_token";
    let data = new FormData();
    data.append("folder", "myimage");
    data.append("token", files[0].delToken);

    axios.post(url, data).then((res) => {
      console.log(res);
      setFiles((curr) => {
        return curr.filter((fw) => {
          return fw.file !== file;
        });
      });
    });
  }

  return (
    <div className="container">
      <div className="col-lg-4">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p style={{ color: "black" }}>Small Image</p>
        </div>
        {files.map((fw, index) => {
          return (
            <div key={index}>
              {fw.url ? <img src={fw.url} alt="" className="img-fluid" /> : ""}
              <Upload file={fw.file} onDelete={onDelete} onUpload={onUpload} />
            </div>
          );
        })}
      </div>
      <pre>{JSON.stringify(files, null, 4)}</pre>
    </div>
  );
}

export default SmallImgUploader;
