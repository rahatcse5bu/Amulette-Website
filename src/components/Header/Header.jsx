import { NavLink } from "react-router-dom";
import { menuItems } from "../../constants/constant-data";

const Header = () => {
	return (
		<div className="header-wrapper mb-7">
			<div className="container flex flex-row items-center justify-between py-6 mx-auto header">
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
												? "active relative text-primaryColor"
												: "inactive"
										}
										to={item.path}
									>
										{item.name}
										<span className="absolute bottom-[-4px] left-2 w-[50%] h-[2px] bg-primaryColor"></span>
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
		</div>
	);
};

export default Header;
