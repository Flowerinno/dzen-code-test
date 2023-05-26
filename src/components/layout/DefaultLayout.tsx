import React from "react";

import { Box, Grid } from "@mui/material";

import Header from "./modules/Header/Header";
import Sidebar from "./modules/Sidebar/Sidebar";

import styles from "./DefaultLayout.module.scss";

interface DefaultLayoutProps {
	children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Header />
			</div>
			<div className={styles.body}>
				<Sidebar />
				{children}
			</div>
		</div>
	);
};

export default DefaultLayout;
