import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import PhotosLibraryPage from "../pages/PhotosLibrary";
import ProductsPage from "../pages/Products";
import ContactUsPage from "../pages/ContactUs";
import GetAppsPage from "../pages/GetApps";

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
				element: <ProductsPage />,
			},
			{
				path: "/get-amulette-app",
				element: <GetAppsPage />,
			},
			{
				path: "/contact-us",
				element: <ContactUsPage />,
			},
		],
	},
]);
