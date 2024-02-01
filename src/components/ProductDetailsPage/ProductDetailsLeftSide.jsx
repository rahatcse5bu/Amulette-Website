/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import image from "../../assets/carousel-image.png";
import { FiChevronLeft } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import { Colors } from "../../constants/colors";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import classNames from "classnames";
const ProductDetailsLeftSide = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	const images = [
		{
			id: 1,
			images: image,
		},
		{
			id: 2,
			images: image,
		},
		{
			id: 3,
			images: image,
		},
		{
			id: 4,
			images: image,
		},
		{
			id: 5,
			images: image,
		},
	];

	// eslint-disable-next-line react/prop-types
	const CustomRightArrow = ({ onClick, ...rest }) => {
		const {
			onMove,
			carouselState: { currentSlide, deviceType },
		} = rest;
		// onMove means if dragging or swiping in progress.
		return (
			<button
				className="z-50 bg-red-900 absolute top-[50%] -translate-y-[-50%] left-0 text-black cursor-pointer w-[100px] h-[100px]"
				onClick={() => onClick()}
			>
				right
			</button>
		);
	};

	const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
		const {
			carouselState: { currentSlide },
		} = rest;
		console.log(currentSlide);
		return (
			<div className="flex items-center justify-end w-full gap-4 mb-4 carousel-button-group">
				<button
					className="absolute top-[50%] w-[50px] h-[50px] rounded-full left-[25px] p-3"
					style={{
						backgroundColor: currentSlide === 0 ? "#979898" : Colors.primary,
					}}
					onClick={() => previous()}
				>
					<FaArrowLeft className="w-5 h-5 text-white" />
				</button>
				<button
					style={{
						backgroundColor:
							currentSlide === images.length - 1 ? "#979898" : Colors.primary,
					}}
					className="absolute top-[50%] flex justify-center items-center right-[25px] w-[50px] h-[50px] rounded-full z-50"
					onClick={() => next()}
				>
					<FaArrowRight className="w-5 h-5 text-white" />
				</button>
			</div>
		);
	};
	const CustomDot = ({ onClick, ...rest }) => {
		const {
			onMove,
			index,
			active,
			carouselState: { currentSlide, deviceType },
		} = rest;
		// onMove means if dragging or swiping in progress.
		// active is provided by this lib for checking if the item is active or not.
		return (
			<div
				className={classNames(
					" mx-3 h-[100px] flex border-2 shadow  justify-center items-center rounded-lg cursor-pointer",
					{
						"border-2 border-orange-500": active === true,
						"border-2 border-gray-200": active !== true,
					}
				)}
				onClick={() => onClick()}
			>
				<img
					src={images[currentSlide].images}
					className="w-full h-full"
					alt=""
				/>
			</div>
		);
	};

	return (
		<div className="w-[50%] border-2  p-10  shadow-md  mx-2 rounded-md relative">
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={true}
				responsive={responsive}
				autoPlaySpeed={1000}
				customButtonGroup={<ButtonGroup />}
				renderButtonGroupOutside={true}
				arrows={false}
				containerClass="py-10 h-[750px]  mb-10"
				customDot={<CustomDot />}
			>
				{images.map((item) => {
					return (
						<div
							key={item.id}
							className=" rounded-md w-[480px] mb-[180px] mt-[20px] h-[calc(650px)]  bg-[#F6F6F6]  mx-auto"
						>
							<img src={item.images} alt="" className="w-full h-full" />
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default ProductDetailsLeftSide;
