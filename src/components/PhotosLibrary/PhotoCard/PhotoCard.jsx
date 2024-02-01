/* eslint-disable react/prop-types */
const PhotoCard = ({ photo }) => {
	return (
		<div className="photo-card relative w-full h-full">
			{photo.isDimond && (
				<div className="badge absolute md:top-4 md:right-4 right-[20%] top-[10%]  z-30 rounded-[86px]">
					<img src="Images/PhotosLibrary/Dimond.svg" />
				</div>
			)}
			<img
				className=" w-full h-full rounded-2xl border border-[#E5E5E4]"
				src={`${photo.photo}`}
			/>
		</div>
	);
};

export default PhotoCard;
