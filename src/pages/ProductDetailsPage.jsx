import ProductDetailsLeftSide from "../components/ProductDetailsPage/ProductDetailsLeftSide";
import ProductDetailsRightSide from "../components/ProductDetailsPage/ProductDetailsRightSide";

const ProductDetailsPage = () => {
	return (
		<div className="flex items-center justify-between gap-3 px-10 py-5">
			<ProductDetailsLeftSide />
			<ProductDetailsRightSide />
		</div>
	);
};

export default ProductDetailsPage;
