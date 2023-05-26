import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { TextField } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { formattedDate } from "@utils/getDate";

import styles from "./Header.module.scss";

const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.headerLeft}>
				<AdminPanelSettingsIcon sx={{ height: 60, width: 60 }} />
				<TextField
					id="outlined-basic"
					label="Поиск"
					variant="outlined"
					sx={{ height: 40 }}
				/>
			</div>
			<div className={styles.date}>
				<p>{formattedDate.date}</p>
				<p className={styles.time}>
					<ScheduleIcon /> {formattedDate.time}
				</p>
			</div>
		</div>
	);
};

export default Header;
