import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import PhotosLibraryPage from "../pages/PhotosLibrary";

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
		],
	},
]);
