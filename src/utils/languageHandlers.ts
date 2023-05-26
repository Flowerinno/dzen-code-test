import i18n from "./i18n";

export const changeLanguage = (language: string): void => {
	i18n
		.changeLanguage(language)
		.then(() => {
			localStorage.setItem("language", language);
		})
		.catch((error: unknown) => {
			console.error("Error changing language:", error);
		});
};

export const getLanguage = (): string => {
	const initialLanguage = localStorage.getItem("language") || "ru";

	return initialLanguage;
};
