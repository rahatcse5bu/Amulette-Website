import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<div className="header-wrapper mb-7">
			<div className="header container mx-auto flex flex-row items-center justify-between py-6">
				<div className="logo">
					<img src="Images/Header/Logo.svg" alt="amulette logo" />
				</div>
				<div className="header-menu-items">
					<ul className=" flex flex-row items-center justify-center space-x-10 text-menuColor text-lg font-Poppins font-semibold">
						<li className="text-primaryColor">
							<Link className="relative" to="/">
								Home
								<span className="absolute bottom-[-4px] left-2 w-[50%] h-[2px] bg-primaryColor"></span>
							</Link>
						</li>
						<li className="">
							<Link to="/photos-library">Photos Library</Link>
						</li>
						<li className="">
							<Link to="/products">Products</Link>
						</li>
						<li className="">
							<Link to="/get-amulette-app">Get The App</Link>
						</li>
						<li className="">
							<Link to="/contact-us">Contact Us</Link>
						</li>
					</ul>
				</div>
				<div className="cart-lang flex flex-row items-center justify-center space-x-10">
					<div className="cart-wrapper flex flex-row items-center justify-center">
						{/* <span className="mr-1 text-primaryColor text-lg font-Poppins font-semibold">
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
	);
};

export default Header;
