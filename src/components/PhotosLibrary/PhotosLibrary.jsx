import React from "react";
import License from "./License/License";

const PhotosLibrary = () => {
  return (
    <div className="photos-library-wrapper ">
      <div className="photos-library container mx-auto flex flex-col lg:flex-row items-center justify-center space-x-8">
        <div className="col-left px-9 py-8">
          <License />
        </div>
        <div className="col-right"></div>
      </div>
    </div>
  );
};

export default PhotosLibrary;
