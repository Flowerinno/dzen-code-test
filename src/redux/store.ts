import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import groupsReducer from "./slices/groupsSlice";
import sidebarReducer from "./slices/sidebarSlice"

const rootReducer = {
	products: productsReducer,
	groups: groupsReducer,
	sidebar: sidebarReducer
};

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
