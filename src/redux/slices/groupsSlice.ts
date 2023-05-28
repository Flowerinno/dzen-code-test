import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	groups: [
		{
			name: "Длинное название группы, прям длинное",
			type: "Monitors",
			price: [
				{ value: 100, symbol: "USD", isDefault: 0 },
				{ value: 2600, symbol: "UAH", isDefault: 1 },
			],
		},
		{
			name: "Длинное название группы, прям длинное, очень длинное",
			type: "Mouse",
			price: [
				{ value: 100, symbol: "USD", isDefault: 0 },
				{ value: 2600, symbol: "UAH", isDefault: 1 },
			],
		},
	],
};

const groupsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
});

export default groupsSlice.reducer;
