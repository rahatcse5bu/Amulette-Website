import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import PhotosLibraryPage from "../pages/PhotosLibrary";
import Products from "../pages/products";
import ContactUs from "../pages/ContactUs";
import GetAppsPage from "../pages/GetApps";
import ProductDetailsPage from "../pages/ProductDetailsPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/photos-library",
				element: <PhotosLibraryPage />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/get-the-app",
				element: <GetAppsPage />,
			},
			{
				path: "/contact-us",
				element: <ContactUs />,
			},
			{
				path: "/product-details",
				element: <ProductDetailsPage />,
			},
		],
	},
]);
