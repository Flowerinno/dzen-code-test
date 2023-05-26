import { createSlice } from "@reduxjs/toolkit";
import { data } from "src/data";
import { ProductsI } from "@redux/types/productsTypes";

type ActiveProduct = "Monitors" | "Mouse";

interface ProductsState {
	products: ProductsI[];
	activeType: ActiveProduct | null;
	activeProduct: ProductsI[] | null;
}

const initialState: ProductsState = {
	products: data,
	activeType: null,
	activeProduct: null,
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.products.push(action.payload);
		},
		removeProduct: (state, action) => {
			state.products.filter((product) => product.id !== action.payload);
		},
		setActiveProduct: (state, action) => {
			state.activeType = action.payload;
			state.activeProduct = state.products.filter(
				(product) => product.type === action.payload
			);
		},
		resetActive: (state) => {
			state.activeType = null;
			state.activeProduct = null;
		},
	},
});

export const { addProduct, removeProduct, setActiveProduct, resetActive } =
	productsSlice.actions;

export default productsSlice.reducer;
