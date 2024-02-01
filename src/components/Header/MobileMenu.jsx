import { NavLink } from "react-router-dom";
import { menuItems } from "../../constants/constant-data";

const MobileMenu = () => {
  return (
    <div className="mobile-menu-wrapper lg:hidden z-50">
      <div className="mobile-menu">
        <ul className="flex flex-col items-center justify-center space-y-12 text-lg pb-5">
          {/* <li className=''><NavLink to='/' className=''>Home</NavLink></li>
                <li className=''><NavLink to='/photos-library' className=''>Photo Gallery</NavLink></li>
                <li className=''><NavLink to='/products' className=''>Products</NavLink></li>
                <li className=''><NavLink to='/get-the-app' className=''>Get The Appp</NavLink></li>
                <li className=''><NavLink to='/contact-us' className=''>Contact Us</NavLink></li> */}
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
    </div>
  );
};

export default MobileMenu;
