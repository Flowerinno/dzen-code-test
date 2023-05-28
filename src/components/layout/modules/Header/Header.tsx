import React, { useEffect } from "react";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { TextField } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import { useAppDispatch } from "@redux/hooks";
import { setIsOpen } from "@redux/slices/sidebarSlice";

import { useTranslation } from "react-i18next";

import useFormattedDate from "@utils/useDate";

import styles from "./Header.module.scss";

interface HeaderProps {
	language: string;
	languageHandler: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, languageHandler }) => {
	const { t } = useTranslation("header");

	const dispatch = useAppDispatch();

	const { date, time } = useFormattedDate();

	useEffect(() => {}, [language]);

	const sidebarHandler = () => {
		dispatch(setIsOpen());
	};

	return (
		<div className={styles.headerContainer}>
			<MenuIcon
				className={styles.headerMenu}
				sx={{ height: 40, width: 40 }}
				onClick={sidebarHandler}
			/>
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
			<Button
				size="small"
				onClick={() => languageHandler(language === "en" ? "ru" : "en")}
				className={styles.headerLanguage}
			>
				{language}
			</Button>
		</div>
	);
};

export default Header;
