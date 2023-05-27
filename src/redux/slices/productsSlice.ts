import { createSlice } from "@reduxjs/toolkit";
import { data } from "src/data";
import { ProductsI } from "@redux/types/productsTypes";

type ActiveProduct = "Monitors" | "Mouse";

interface ProductsState {
	products: ProductsI[];
	activeType: ActiveProduct | null;
	activeProducts: ProductsI[] | null;
}

const initialState: ProductsState = {
	products: data,
	activeType: null,
	activeProducts: null,
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
			state.activeProducts = state.products.filter(
				(product) => product.type === action.payload
			);
		},
		resetActive: (state) => {
			state.activeType = null;
			state.activeProducts = null;
		},
	},
});

export const { addProduct, removeProduct, setActiveProduct, resetActive } =
	productsSlice.actions;

export default productsSlice.reducer;
