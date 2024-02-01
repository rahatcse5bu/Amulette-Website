// import { NavLink } from "react-router-dom";
// import { menuItems } from "../../constants/constant-data";
import { RiMenu5Fill } from "react-icons/ri";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
  return (
    <div className="header-wrapper ">
<DesktopHeader/>
      <div className="mobile-header lg:hidden flex flex-row items-center justify-between px-5 py-4">
        <div className="col-left">
          <RiMenu5Fill size={26}
          //  onClick={}
          />
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
    </div>
  );
};

export default Header;
