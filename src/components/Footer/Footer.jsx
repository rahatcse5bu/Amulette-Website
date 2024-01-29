import React from "react";

import Copyright from "./Copyright/Copyright";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  MdEnhancedEncryption,
  MdOutlineSecurity,
  MdOutlineEmail,
} from "react-icons/md";
import { FaCircleInfo, FaSquareFacebook } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";



const Footer = () => {
  return (
    <div className="footer-wrapper relative bg-[#25282B] lg:pt-[100px] lg:pb-[70px] mt-[50px] lg:mt-[50px] ">
    
      <div className="container mx-auto px-0 footer-main flex flex-col lg:flex-row items-center lg:items-start justify-between text-white">
        <DesktopFooter/>
        <MobileFooter />
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
