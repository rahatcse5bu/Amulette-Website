
import { NavLink } from 'react-router-dom';
import { menuItems } from '../../constants/constant-data';

const DesktopHeader = () => {
    return (
        <div className="container hidden lg:flex flex-row items-center justify-around py-6 mx-auto header">
        <div className="logo">
          <img src="Images/Header/Logo.svg" alt="amulette logo" />
        </div>
        <div className="header-menu-items">
          <ul className="flex flex-row items-center justify-center space-x-10 text-lg font-semibold text-menuColor font-Poppins">
            {menuItems.map((item) => {
              return (
                <li key={item.id} className="">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "active-header relative text-primaryColor"
                        : "inactive-header"
                    }
                    to={item.path}
                  >
                    {item.name}
                    <span className=" bottom-[-4px]   w-[20px] mx-auto h-[3px] bg-primaryColor"></span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center space-x-10 cart-lang">
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
    );
};

export default DesktopHeader;