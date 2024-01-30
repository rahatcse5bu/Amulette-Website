import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import PhotosLibraryPage from "../pages/PhotosLibrary";
import Products from "../pages/products";
import GetTheApp from "../pages/GetTheApp";
import ContactUs from "../pages/ContactUs";

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
				element: <GetTheApp />,
			},
			{
				path: "/contact-us",
				element: <ContactUs />,
			},
		],
	},
]);
