import React from "react";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url('Images/Hero/Hero-BG.svg')` }}
      className="hero-wrapper bg-cover bg-center pt-[160px] pb-[180px]"
    >
      <div className="hero container mx-auto  flex flex-col items-start justify-start ">
        <h3 className="text-left capitalize text-primaryColor font-Poppins font-bold text-xl">
          Express Yourself with Amulette
        </h3>
        <div className="heading-section flex flex-col items-start justify-start text-left font-Poppins lg:text-[66px] text-headingColor mt-8">
          <span className="blockk">Your Personal</span>
          <span className="">Badge of Creativity!</span>
        </div>
        <div className="paragram-section flex flex-col items-start justify-start font-Poppins text-xl text-headingColor font-normal mt-8">
          <span className="block">
            A compact, stylish, and customizable badge that
          </span>
          <span className="showcases your unique personality."></span>
        </div>
        <div className="buttons flex flex-row items-center justify-center space-x-7 mt-12">
          <button className="text-xl font-Poppins font-medium bg-primaryColor text-white px-[76px] py-4 rounded-lg">
            Shop Now
          </button>
          <button className="text-xl font-Poppins font-medium text-primaryColor hover:bg-primaryColor hover:text-white border border-primaryColor px-[76px] py-4 rounded-lg">
            Get The App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
