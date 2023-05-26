import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () =>
	configureStore({
		reducer: {},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
		devTools: process.env.NODE_ENV !== "production",
	});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
