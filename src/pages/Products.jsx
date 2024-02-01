import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/Home/OurProducts/ProductCard";
import { productsData } from "../components/Home/OurProducts/ProductData";
import { IoSearchSharp } from "react-icons/io5";
import ProductNotFound from "../components/ProductNotFound";

const ProductsPage = () => {
	const [productSearchTitle, setProductSearchTitle] = useState("");
	const [sortOption, setSortOption] = useState("");
	const filteredProducts = useMemo(() => {
		let filtered = productsData.filter((product) =>
			product.title.toLowerCase().includes(productSearchTitle.toLowerCase())
		);

		if (sortOption === "low-to-high") {
			filtered.sort((a, b) => a.price - b.price);
		} else if (sortOption === "high-to-low") {
			filtered.sort((a, b) => b.price - a.price);
		}

		return filtered;
	}, [productSearchTitle, sortOption]);

	return (
		<div className="product-page bg-[#FDFDFD] pt-7">
			<div className="container px-5 mx-auto products-wrapper lg:px-0">
				<h1 className="text-xl font-bold text-left  lg:text-2xl">
					<span className="text-[#25282B]">Amulette</span>
					<span className="text-primaryColor"> Accessories</span>
				</h1>
				<p className="text-[#25282B] text-[12px] lg:text-sm font-normal text-left mt-4">
					Elevate Your Experience with Our Range of Stylish Accessories
				</p>
				<div className="flex flex-row items-center justify-between search-sort-wrapper space-x-7 mt-7">
					<div className="search-wrapper w-3/4 lg:w-full flex flex-row items-center justify-center space-x-2.5 border border-[#DADADA] rounded-full px-2 lg:px-4 py-2 lg:py-3.5">
						<IoSearchSharp className="text-primaryColor" />
						<input
							onChange={(e) => setProductSearchTitle(e.target.value)}
							type="text"
							value={productSearchTitle}
							className="w-full"
							placeholder="Search for product..."
						/>
					</div>
					<select
						value={sortOption}
						onChange={(e) => setSortOption(e.target.value)}
						className="w-1/4 lg:w-auto border border-primaryColor px-2 lg:px-5 py-2 lg:py-2.5  rounded-full"
					>
						<option disabled value="Sort by">
							Sort By: Price low to high
						</option>
						<option value="low-to-high">Price: Low to High</option>
						<option value="high-to-low">Price: High to Low</option>
					</select>
				</div>
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-9">
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
