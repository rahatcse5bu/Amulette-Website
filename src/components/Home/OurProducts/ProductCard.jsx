import React from "react";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({product}) => {
  return (
    <div className="product-card flex flex-col items-center justify-center border border-black border-opacity-20 rounded-3xl py-6">
      <div className="img-wrapper px-[30px] py-[15px] border border-[#F6F6F6] bg-[#F6F6F6] rounded-2xl">
      <img src= {`${product.img}`} alt="" height={221} />
      </div>
      <h3 className="title text-[1C121F] text-sm lg:text-lg font-semibold font-Poppins">
        {product.title}
      </h3>
      <p className="desc text-[9px] lg:text-xs text-[#1C121F] font-normal font-Poppins mt-2">
      {product.shortDescription}
      </p>
      <div className="usd-add-to-cart flex flex-row items-center justify-center space-x-9 mt-3.5">
        <span className="text-[#1C121F] text-sm  lg:text-lg font-semibold">${product.price}</span>
        <button className="bg-primaryColor text-white px-8 lg:px-10 py-2.5 lg:py-3.5 rounded-[50px]">
        <div className="flex flex-row items-center justify-center space-x-1.5">  <IoCartOutline size={16} /> <span>Add to cart</span></div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
