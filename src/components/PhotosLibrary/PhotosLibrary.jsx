import License from "./License/License";
import PhotoCard from "./PhotoCard/PhotoCard";
import { IoSearchSharp } from "react-icons/io5";
import Category from "./Category/Category";
import Pagination from "./Pagination/Pagination";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useState } from "react";
import PhotosLibrarySidebar from "./PhotosLibrarySidebar/PhotosLibrarySidebar";

const PhotosLibrary = () => {
	const [sideBarOpen, setSideBarOpen] = useState(false);

	const photos = [
		{
			photo:
				"https://images.pexels.com/photos/1632794/pexels-photo-1632794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750",
			isDimond: false,
		},
		{
			photo:
				"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600",
			isDimond: true,
		},
		{
			photo:
				"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600",
			isDimond: false,
		},
		{
			photo:
				"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
			isDimond: true,
		},
		{
			photo:
				"https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600",
			isDimond: false,
		},
		{
			photo:
				"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
			isDimond: false,
		},
		{
			photo:
				"https://images.pexels.com/photos/234272/pexels-photo-234272.jpeg?auto=compress&cs=tinysrgb&w=600",
			isDimond: false,
		},
		{
			photo:
				"https://images.pexels.com/photos/1276518/pexels-photo-1276518.jpeg?auto=compress&cs=tinysrgb&w=600",
			isDimond: true,
		},
		{
			photo:
				"https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=600",
			isDimond: true,
		},
		{
			photo:
				"https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600",
			isDimond: false,
		},
		{
			photo:
				"https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600",
			isDimond: false,
		},
		{
			photo:
				"https://images.pexels.com/photos/2105416/pexels-photo-2105416.jpeg?auto=compress&cs=tinysrgb&w=600",
			isDimond: true,
		},
	];

	// TODO:: sidebar open handler
	const sideBarHandler = () => {
		setSideBarOpen((prev) => !prev);
	};

	return (
		<div className="photos-library-wrapper ">
			<div className="container flex flex-col items-start justify-between mx-auto md:space-x-8 md:px-0 px-0 md:bg-white bg-[#fdfdfd] photos-library md:flex-row">
				<div className="col-left px-9 py-8 md:block hidden rounded-3xl border border-[#979898]">
					<License />
					<Category />
				</div>

				<div className="col-right md:rounded-3xl  md:border border-[#979898] px-11 py-7">
					<h3 className="text-[25px] font-bold">
						<span className="text-[#25282B">Explore</span>
						<span className="text-primaryColor"> Diverse Photos</span>
					</h3>
					<p className="text-sm leading-7 text-[#25282B] mt-1">
						Dive into our extensive library of captivating photos. From stunning
						landscapes to adorable pets, discover a world of creativity and
						inspiration.
					</p>
					<div className="search-wrapper relative items-center mt-7 flex justify-between">
						{sideBarOpen && (
							<PhotosLibrarySidebar sideBarHandler={sideBarHandler} />
						)}
						<div
							onClick={sideBarHandler}
							className="block md:hidden px-6 py-4 h-[50px] bg-primaryColor rounded-2xl cursor-pointer "
						>
							<HiAdjustmentsHorizontal className="w-6 h-6 text-white" />
						</div>

						<div className="search border w-full flex md:ml-0 ml-3 flex-row items-center justify-start space-x-2.5 border-[#DADADA] rounded-3xl px-4 py-3 h-[50px]">
							<IoSearchSharp color="#F65F19" size={18} />{" "}
							<input
								className="w-[85%] focus:border-0 indent-3 outline-none "
								type="text"
								placeholder="Search"
							/>
						</div>
					</div>
					{/* photos section */}
					<div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-8 mt-9">
						{photos?.map((photo, index) => (
							<PhotoCard key={index} photo={photo} />
						))}
					</div>
					<Pagination />
				</div>
			</div>
		</div>
	);
};

export default PhotosLibrary;
