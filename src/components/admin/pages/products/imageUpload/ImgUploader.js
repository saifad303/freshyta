import React from "react";
import SmallImgUploader from "./smallImg/SmallImgUploader";
import MediumImgUploader from "./mediumImg/MediumImgUploader";
import LargeImgUploader from "./largeImg/LargeImgUploader";

function ImgUploader() {
  return (
    <>
      <SmallImgUploader />
      <MediumImgUploader />
      <LargeImgUploader />
    </>
  );
}

export default ImgUploader;
