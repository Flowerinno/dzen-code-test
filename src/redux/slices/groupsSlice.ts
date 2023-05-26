import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	groups: [
		{
			type: "Monitors",
		},
		{
			type: "Mouse",
		},
	],
};

const groupsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
});

export default groupsSlice.reducer;
