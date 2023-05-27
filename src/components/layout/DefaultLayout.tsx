import React, { useState } from "react";

import { getLanguage } from "@utils/languageHandlers";

import { changeLanguage } from "@utils/languageHandlers";

import Header from "./modules/Header/Header";
import Sidebar from "./modules/Sidebar/Sidebar";

import styles from "./DefaultLayout.module.scss";

interface DefaultLayoutProps {
	children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
	const [language, setLanguage] = useState(getLanguage);

	const languageHandler = (lang: string): void => {
		setLanguage(lang);
		changeLanguage(language);
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Header language={language} languageHandler={languageHandler} />
			</div>
			<div className={styles.body}>
				<Sidebar />
				{children}
			</div>
		</div>
	);
};

export default DefaultLayout;
