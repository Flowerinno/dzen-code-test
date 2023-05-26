import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/lang/langSlice";

const rootReducer = {
	lang: langReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
