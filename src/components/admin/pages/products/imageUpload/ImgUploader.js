import React from "react";
import SmallImgUploader from "./smallImg/SmallImgUploader";
import MediumImgUploader from "./mediumImg/MediumImgUploader";
import LargeImgUploader from "./largeImg/LargeImgUploader";
import { useProduct } from "../../../../../context/product/ProductProvider";
import { Spinner } from "react-bootstrap";

function ImgUploader({ small, medium, large }) {
  let { loading } = useProduct();

  return (
    <>
      {loading ? (
        <>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </>
      ) : (
        <>
          <SmallImgUploader small={small} />
          <MediumImgUploader medium={medium} />
          <LargeImgUploader large={large} />
        </>
      )}
    </>
  );
}

export default ImgUploader;
