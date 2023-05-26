import React, { useEffect } from "react";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { TextField } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Button from "@mui/material/Button";

import { useTranslation } from "react-i18next";

import useFormattedDate from "@utils/useDate";

import styles from "./Header.module.scss";

interface HeaderProps {
	language: string;
	languageHandler: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, languageHandler }) => {
	const { t } = useTranslation("header");

	const { date, time } = useFormattedDate();

	useEffect(() => {}, [language]);

	return (
		<div className={styles.headerContainer}>
			<div className={styles.headerLeft}>
				<AdminPanelSettingsIcon sx={{ height: 60, width: 60 }} />
				<TextField
					id="outlined-basic"
					label={t("search")}
					variant="outlined"
					sx={{ height: 40 }}
				/>
			</div>
			<div className={styles.date}>
				<p>{date}</p>
				<p className={styles.time}>
					<ScheduleIcon /> {time}
				</p>
			</div>
			<Button onClick={() => languageHandler(language === "en" ? "ru" : "en")}>
				{language}
			</Button>
		</div>
	);
};

export default Header;
