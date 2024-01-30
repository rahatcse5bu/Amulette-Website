import React from "react";
import License from "./License/License";
import PhotoCard from "./PhotoCard/PhotoCard";
import { IoSearchSharp } from "react-icons/io5";
import Category from "./Category/Category";
import Pagination from "./Pagination/Pagination";

const PhotosLibrary = () => {
  const photos = [
    {
      photo:
        "https://images.pexels.com/photos/1632794/pexels-photo-1632794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750",
    },
    {
      photo:
        "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      photo:
        "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      photo:
        "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      photo:
        "https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      photo:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      photo:
        "https://images.pexels.com/photos/234272/pexels-photo-234272.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      photo:
        "https://images.pexels.com/photos/1276518/pexels-photo-1276518.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      photo:
        "https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      photo:
        "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      photo:
        "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      photo:
        "https://images.pexels.com/photos/2105416/pexels-photo-2105416.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="photos-library-wrapper ">
      <div className="photos-library container mx-auto flex flex-row lg:flex-row items-start justify-between space-x-8">
        <div className="col-left px-9 py-8 rounded-3xl border border-[#979898]">
          <License />
          <Category/>
        </div>
        <div className="col-right rounded-3xl border border-[#979898] px-11 py-7">
          <h3 className="text-[25px] font-bold">
            <span className="text-[#25282B">Explore</span>
            <span className="text-primaryColor"> Diverse Photos</span>
          </h3>
          <p className="text-sm leading-7 text-[#25282B] mt-1">
            Dive into our extensive library of captivating photos. From stunning
            landscapes to adorable pets, discover a world of creativity and
            inspiration.
          </p>
          <div className="search-wrapper mt-7">
            <div className="search border flex flex-row items-center justify-start space-x-2.5 border-[#DADADA] rounded-3xl px-4 py-3">
               <IoSearchSharp color="#F65F19" size={18}/> <input className="w-[85%] focus:border-0 px-4 py-2" type="text" placeholder="Search"/>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-9">
          {photos?.map((photo, index) => (
            <PhotoCard key={index} photo={photo} />
          ))}
          </div>
          <Pagination/>
        </div>
      </div>
    </div>
  );
};

export default PhotosLibrary;
