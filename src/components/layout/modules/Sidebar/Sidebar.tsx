import { Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link } from "react-router-dom";
import Photo from "@assets/avatar.jpg";

import { useTranslation } from "react-i18next";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
	
	const { t } = useTranslation("sidebar");

	const links = [
		{
			name: t("income"),
			link: "/",
		},
		{
			name: t("groups"),
			link: "/groups",
		},
		{
			name: t("products"),
			link: "/products",
		},
		{
			name: t("users"),
			link: "/users",
		},
		{
			name: t("settings"),
			link: "/settings",
		},
	];

	return (
		<div className={styles.sidebarContainer}>
			<div className={styles.sidebarAvatar}>
				<Avatar
					alt="Aleksandr Kononov"
					src={Photo}
					sx={{ width: 150, height: 150 }}
				/>
				<div className={styles.settingsIcon}>
					<SettingsIcon color="primary" sx={{ width: 30, height: 30 }} />
				</div>
			</div>

			{links.map(({ name, link }) => (
				<div key={name} className={styles.sidebarItem}>
					<Link to={link} className={styles.itemLink}>
						{name}
					</Link>
				</div>
			))}
		</div>
	);
};

export default Sidebar;
