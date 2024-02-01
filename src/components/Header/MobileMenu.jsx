import { NavLink } from 'react-router-dom';

const MobileMenu = () => {
    return (
        <div className='mobile-menu-wrapper lg:hidden z-50'>
        <div className='mobile-menu'>
            <ul className='flex flex-col items-center justify-center space-y-12 text-lg'>
                <li className=''><NavLink to='/' className=''>Home</NavLink></li>
                <li className=''><NavLink to='/photos-library' className=''>Photo Gallery</NavLink></li>
                <li className=''><NavLink to='/products' className=''>Products</NavLink></li>
                <li className=''><NavLink to='/get-the-app' className=''>Get The Appp</NavLink></li>
                <li className=''><NavLink to='/contact-us' className=''>Contact Us</NavLink></li>
            </ul>

            </div>
        </div>
    );
};

export default MobileMenu;