/* eslint-disable react/prop-types */
import License from "../License/License";
import Category from "../Category/Category";
import { HiMiniXCircle } from "react-icons/hi2";

const PhotosLibrarySidebar = ({ sideBarHandler }) => {
	return (
		<div className="col-left p-2 rounded-3xl absolute top-0 border bg-white z-50 w-full border-[#979898]">
			<div
				className="text-left flex justify-end z-[2000] cursor-pointer"
				onClick={sideBarHandler}
			>
				<HiMiniXCircle className="w-6 h-6 text-primaryColor" />
			</div>
			<License />
			<Category />
		</div>
	);
};

export default PhotosLibrarySidebar;
