import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa";

const ProductDetailsRightSide = () => {
	const specifications = [
		{
			id: "1",
			name: "Product Dimensions",
			value: "3cm x 3cm x 0.5cm",
		},
		{
			id: "2",
			name: "Weight",
			value: "12 Gram",
		},
		{
			id: "3",
			name: "Base Material",
			value: "Carbon Steel",
		},
		{
			id: "4",
			name: "Stape",
			value: "Square",
		},
		{
			id: "5",
			name: "Color",
			value: "Black",
		},
	];
	const descriptions = [
		{
			id: "1",
			description:
				"Seamlessly pair with your smartphone via Bluetooth for easy image transfer.",
		},
		{
			id: "2",
			description:
				"Compact and lightweight, the Amulette Device attaches easily to any surface, turning it into a canvas for your creativity.",
		},
		{
			id: "3",
			description:
				"Choose from your photo library to display images that reflect your mood, experiences, and passions.",
		},
		{
			id: "4",
			description:
				"Crystal-clear image quality ensures your photos look vibrant and sharp, enhancing the visual impact of your wearable art.",
		},
	];
	return (
		<div className="w-[50%]">
			{/* product general information */}
			<h1 className="text-zinc-900 text-[25px] mb-[23px] font-semibold font-['Poppins'] leading-normal">
				Amulette Device{" "}
			</h1>
			<p className="w-[581px] text-zinc-800 mb-[34px] text-[15px] font-normal font-['Poppins'] leading-7 tracking-tight">
				A card-sized device that turns your memories into wearable art. Showcase
				your unique style with this compact, customizable badge.
			</p>
			<h3 className="text-zinc-900 mb-[44px] text-3xl font-bold font-['Poppins'] leading-[30.89px]">
				$ 50.00
			</h3>
			{/* button section */}
			<div className="flex flex-col items-center mb-[40px] justify-start md:flex-row">
				<div className="w-[210.10px] h-[61px] flex items-center justify-between px-5  bg-neutral-50 rounded-[500px] shadow-inner">
					<button>
						<FaMinus className="w-4 h-4" />
					</button>
					<p>0</p>
					<button>
						<FaPlus className="w-4 h-4" />
					</button>
				</div>
				<div className="ml-10">
					<button className="w-[237.90px] flex items-center justify-center px-5 h-[61px] bg-orange-600 rounded-[65.36px]">
						<FaCartPlus className="w-4 h-4 text-white" />
						<strong className="ml-2 text-lg text-white">Add to Cart</strong>
					</button>
				</div>
			</div>
			{/* product specification */}
			<h4 className="text-neutral-400 text-[15px] mb-[10px] font-medium font-['Poppins'] leading-normal tracking-tight">
				Specifications
			</h4>
			<table className="mb-[40px]">
				{specifications.map((item) => (
					<tr key={item.id}>
						<td className="pr-4">{item.name}</td>
						<td>{item.value}</td>
					</tr>
				))}
			</table>
			{/* product description */}
			<h4 className="text-neutral-400 text-[15px] mb-[10px] font-medium font-['Poppins'] leading-normal tracking-tight">
				Description
			</h4>
			<ul
				style={{
					listStyle: "circle",
				}}
			>
				{descriptions.map((item) => {
					return (
						<li className="mt-2" key={item.id}>
							{item.description}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ProductDetailsRightSide;
