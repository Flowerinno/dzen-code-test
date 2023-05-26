import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	groups: ["Monitors", "Keyboards", "Mice", "Headsets"],
};

const groupsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
});

export default groupsSlice.reducer;
