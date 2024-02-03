import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter";
import { photoSlice } from "./features/photoLibrary";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		photo:photoSlice
	},
});
