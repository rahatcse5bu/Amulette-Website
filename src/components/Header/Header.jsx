// import { NavLink } from "react-router-dom";
// import { menuItems } from "../../constants/constant-data";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

import DesktopHeader from "./DesktopHeader";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="header-wrapper z-50 fixed top-0 left-0 bg-white">
      <DesktopHeader />
      <div className="mobile-header bg-white lg:hidden flex flex-row items-center justify-between px-5 py-4 shadow-md">
        <div className="col-left">
          {isMobileMenuOpen && (
            <IoCloseSharp
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              size={26}
            />
          )}
          {!isMobileMenuOpen && (
            <RiMenu5Fill
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              size={26}
            />
          )}
        </div>
        <div className="col-middle menu-items">
          <img src="Images/Header/Logo.svg" />
        </div>
        <div className="col-right">
          <div className="flex flex-row items-center justify-center cart-lang">
            <div className="flex flex-row items-center justify-center cart-wrapper">
              {/* <span className="mr-1 text-lg font-semibold text-primaryColor font-Poppins">
							Cart
						</span>
						<img src="Images/Header/Cart.svg" /> */}
            </div>
            <select className="lang border border-primaryColor rounded-[54px] py-2 px-4">
              <option selected value="english">
                Eng
              </option>
              <option value="bangla">Bn</option>
            </select>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>}
    </div>
  );
};

export default Header;
