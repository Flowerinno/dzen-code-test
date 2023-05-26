import { Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link } from "react-router-dom";
import Photo from "@assets/avatar.jpg";

import styles from "./Sidebar.module.scss";

const links = [
	{
		name: "ПРИХОДЫ",
		link: "/",
	},
	{
		name: "ГРУППЫ",
		link: "/groups",
	},
	{
		name: "ПРОДУКТЫ",
		link: "/products",
	},
	{
		name: "ПОЛЬЗОВАТЕЛИ",
		link: "/users",
	},
	{
		name: "НАСТРОЙКИ",
		link: "/settings",
	},
];

const Sidebar = () => {
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
