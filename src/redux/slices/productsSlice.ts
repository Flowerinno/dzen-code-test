import { createSlice } from "@reduxjs/toolkit";
import { data } from "src/data";
import { ProductsI } from "@redux/types/productsTypes";

type ActiveProduct = "Monitors" | "Mouse";

interface ProductsState {
	products: ProductsI[];
	activeType: ActiveProduct | null;
	activeProducts: ProductsI[] | null;
	selectedProduct: ProductsI | null;
}

const initialState: ProductsState = {
	products: data,
	activeType: null,
	activeProducts: null,
	selectedProduct: null,
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.products.push(action.payload);
		},
		removeProduct: (state, action) => {
			state.products = state.products.filter(
				(product) => product.id !== action.payload
			);
		},
		setActiveProduct: (state, action) => {
			state.activeType = action.payload;
			state.activeProducts = state.products.filter(
				(product) => product.type === action.payload
			);
		},
		resetActive: (state) => {
			state.activeType = null;
			state.activeProducts = state.products;
		},
		selectProduct: (state, action) => {
			state.selectedProduct = action.payload;
		},
		resetProducts: (state) => {
			state = initialState;
		},
	},
});

export const {
	addProduct,
	removeProduct,
	setActiveProduct,
	resetActive,
	selectProduct,
	resetProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
