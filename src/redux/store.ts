import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import groupsReducer from "./slices/groupsSlice";

const rootReducer = {
	products: productsReducer,
	groups: groupsReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
