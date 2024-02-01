import { useMemo, useState } from "react";
import ProductCard from "../components/Home/OurProducts/ProductCard";
import { productsData } from "../components/Home/OurProducts/ProductData";
import { IoSearchSharp } from "react-icons/io5";
import ProductNotFound from "../components/ProductNotFound";

const ProductsPage = () => {
	const [productSearchTitle, setProductSearchTitle] = useState("");

	const filteredProducts = useMemo(
		() =>
			productsData.filter((product) =>
				product.title.toLowerCase().includes(productSearchTitle.toLowerCase())
			),
		[productSearchTitle]
	);

	return (
		<div className="product-page bg-[#FDFDFD] pt-7">
			<div className="container mx-auto products-wrapper">
				<h1 className="text-2xl font-bold text-left">
					<span className="text-[#25282B]">Amulette</span>
					<span className="text-primaryColor">Accessories</span>
				</h1>
				<p className="text-[#25282B] text-sm font-normal text-left mt-4">
					Elevate Your Experience with Our Range of Stylish Accessories
				</p>
				<div className="flex flex-row items-center justify-between search-sort-wrapper space-x-7 mt-7">
					<div className="search-wrapper w-full flex flex-row items-center justify-center space-x-2.5 border border-[#DADADA] rounded-full px-4 py-3.5">
						<IoSearchSharp className="text-primaryColor" />
						<input
							onChange={(e) => setProductSearchTitle(e.target.value)}
							type="text"
							value={productSearchTitle}
							className="w-full"
							placeholder="Search for product..."
						/>
					</div>
					<select className="border border-primaryColor px-5 py-2.5  rounded-full">
						<option disabled value="Sort by">
							Sort By: Price low to high
						</option>
						<option value="Price: Low to High">Price: Low to High</option>
						<option value="Price: High to Low">Price: High to Low</option>
					</select>
				</div>
				<div className="grid grid-cols-4 gap-4 mt-9">
					{filteredProducts.length > 0 &&
						filteredProducts?.map((data, index) => (
							<ProductCard key={index} product={data} index={index} />
						))}
				</div>
			</div>
			{filteredProducts.length <= 0 && <ProductNotFound />}
		</div>
	);
};

export default ProductsPage;
