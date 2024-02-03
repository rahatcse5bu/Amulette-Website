import React from "react";

const Copyright = () => {
  return (
    <div className="copyright-wrapper mx-2  lg:mx-0">
      <div className="copyright container bg-primaryColor rounded-md flex flex-col lg:flex-row items-center justify-between px-5 lg:px-10  pt-5 pb-4 lg:py-9 mb-[102px] lg:mb-auto mx-auto lg:mx-auto lg:mt-16">
        <div className="copyright-text capitalize font-Montserrat text-xs lg:text-lg text-white text-center lg:text-left">
          © 2023 Amulette Limited. All rights reserved.
        </div>
        <div className="copyright-logo mt-3 lg:mt-0">
          <img
            src={"Images/Footer/Copyright-Logo.svg"}
            width={117}
            height={32}
            alt={"Amulette Logo"}
          />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
