import { createSlice, configureStore } from "@reduxjs/toolkit";

interface LangState {
	lang: string;
	supportedLangs: { [key: string]: string };
	translations: { [key: string]: { [key: string]: string } };
}

export const defaultLang = "ru";

export const supportedLangs = {
	en: "English",
	ru: "Russian",
};

const initialState = {
	lang: defaultLang,
	supportedLangs: { ...supportedLangs },
	translations: {
		en: {
			hello: "Hello",
			world: "World",
		},
		ru: {
			hello: "Привет",
			world: "Мир",
		},
	},
};

export const langSlice = createSlice({
	name: "i18n",
	initialState,
	reducers: {
		changeLang: (state, action) => {
			state.lang = action.payload;
		},
	},
});

export const selectTranslations = (state: LangState) =>
	state.translations[state.lang];

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;
