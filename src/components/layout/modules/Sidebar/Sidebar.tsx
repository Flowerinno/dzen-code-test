import { Avatar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link } from "react-router-dom";
import Photo from "@assets/avatar.jpg";

import {useTransition, animated} from 'react-spring';
import { useTranslation } from "react-i18next";
import {useAppSelector } from "@redux/hooks";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {	
	const isOpen = useAppSelector(state => state.sidebar.isOpen);

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

	

	const sidebarTransition = useTransition(isOpen, {
		from: { transform: "translateX(-100%)" },
		enter: { transform: "translateX(0%)" },
		leave: { transform: "translateX(-100%)" },
	  });

	if(!isOpen) return null;

	return (
		<>
		{sidebarTransition((style, item) =>
		  item ? (
			<animated.div
			  className={styles.sidebarContainer}
			  style={{...style, backgroundColor: '#eff5f7'}}
			>
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
			</animated.div>
		  ) : null
		)}
	  </>
	);
  }


export default Sidebar;
