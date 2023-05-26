import React from "react";

import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import { setActiveProduct } from "@redux/slices/productsSlice";

import { useTranslation } from "react-i18next";

import styles from "./IncomeGroups.module.scss";

interface GroupsI {
	type: string;
}
interface IncomeGroupsProps {
	groups: GroupsI[];
	productsCount: number;
}

const IncomeGroups: React.FC<IncomeGroupsProps> = ({
	groups,

	productsCount,
}) => {
	const { t } = useTranslation("income");

	const setActive = (type: string) => {
		setActiveProduct({ payload: type });
	};

	return (
		<div className={styles.incomeGroups}>
			<ul className={styles.incomeGroupsList}>
				{groups.map((group, index) => {
					return (
						<li key={index} className={styles.incomeGroupsListItem}>
							<span className={styles.count}>
								<FactCheckOutlinedIcon />
								{productsCount}
								<br />
								{t("incomeGroups.productsCount")}
							</span>
							<span className={styles.groupDate}>2017/06/29</span>
							<span
								className={styles.groupName}
								onClick={() => setActive(group.type)}
							>
								{group.type}
							</span>

							<span className={styles.arrow}>
								<KeyboardArrowRightOutlinedIcon
									sx={{ height: 50, width: 50, color: "white" }}
								/>
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default IncomeGroups;
