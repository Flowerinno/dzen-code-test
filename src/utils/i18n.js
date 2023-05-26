import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en/english.json";
import ru from "../locales/ru/russian.json";

const resources = {
	en,
	ru,
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	interpolation: {
		escapeValue: false,
	},
	debug: true,
});

export default i18n;
