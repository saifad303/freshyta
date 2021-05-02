import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useField } from "formik";
import axios from "axios";
import { useProduct } from "../../../../../../context/product/ProductProvider";
import UploadError from "./UploadError";
import { Spinner } from "react-bootstrap";
import {
  baseStyle,
  activeStyle,
  acceptStyle,
  rejectStyle,
} from "../dropzoneStyle";
import Upload from "./Upload";
import { useDropzone } from "react-dropzone";

function LargeImgUploader({ large }) {
  const { remover, setRemover } = useProduct();
  let [files, setFiles] = useState([]);
  let [_, __, helpers] = useField(large);

  useEffect(() => {
    // console.log("...running");
    setFiles([]);
    setRemover(false);
  }, [remover === true]);

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

  useEffect(() => {
    if (files.length) {
      helpers.setValue(files[0].url);
    } else {
      helpers.setValue("");
    }
  }, [files]);

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

    if (files[0].delToken) {
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
    } else {
      setFiles((curr) => {
        return curr.filter((fw) => {
          return fw.file !== file;
        });
      });
    }
  }

  return (
    <div className="col-lg-4">
      {files.length ? (
        ""
      ) : (
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p style={{ color: "black" }}>Large Image</p>
        </div>
      )}

      {files.map((fw, index) => {
        return fw.errors.length ? (
          <div key={index}>
            <UploadError
              file={fw.file}
              onDelete={onDelete}
              errors={fw.errors}
            />
          </div>
        ) : (
          <div key={index}>
            {fw.url ? (
              <img src={fw.url} alt="" className="img-fluid" />
            ) : (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            )}
            <Upload file={fw.file} onDelete={onDelete} onUpload={onUpload} />
          </div>
        );
      })}
      {/* <pre>{JSON.stringify(files, null, 4)}</pre> */}
    </div>
  );
}

export default LargeImgUploader;
