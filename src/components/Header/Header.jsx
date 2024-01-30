const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="header container mx-auto flex flex-row items-center justify-between py-6">
				<div className="logo">
					<img src="Images/Header/Logo.svg" alt="amulette logo" />
				</div>
				<div className="header-menu-items">
					<ul className=" flex flex-row items-center justify-center space-x-10 text-menuColor text-lg font-Poppins font-semibold">
						<li className="text-primaryColor">
							<a className="relative" href="#">
								Home
								<span className="absolute bottom-[-4px] left-2 w-[50%] h-[2px] bg-primaryColor"></span>
							</a>
						</li>
						<li className="">
							<a href="#">Photos Library</a>
						</li>
						<li className="">
							<a href="#">Products</a>
						</li>
						<li className="">
							<a href="#">Get The App</a>
						</li>
						<li className="">
							<a href="#">Contact Us</a>
						</li>
					</ul>
				</div>
				<div className="cart-lang flex flex-row items-center justify-center space-x-10">
					<div className="cart-wrapper flex flex-row items-center justify-center">
						<span className="mr-1 text-primaryColor text-lg font-Poppins font-semibold">
							Cart
						</span>
						<img src="Images/Header/Cart.svg" />
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
