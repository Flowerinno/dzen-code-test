import { createSlice } from "@reduxjs/toolkit";
import { data } from "src/data";
import { ProductsI } from "@redux/types/productsTypes";

const initialState: ProductsI[] = data;

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.push(action.payload);
		},
		removeProduct: (state, action) => {
			state.filter((product) => product.id !== action.payload);
		},
	},
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
