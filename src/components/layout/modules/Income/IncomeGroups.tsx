import React from "react";

import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

import { useTranslation } from "react-i18next";

import styles from "./IncomeGroups.module.scss";

interface IncomeGroupsProps {
	groups: string[];
	productsCount: number;
}

const IncomeGroups: React.FC<IncomeGroupsProps> = ({
	groups,
	productsCount,
}) => {
	const { t } = useTranslation("income");

	return (
		<div className={styles.incomeGroups}>
			<ul className={styles.incomeGroupsList}>
				{groups.map((group) => {
					return (
						<li key={group} className={styles.incomeGroupsListItem}>
							<FactCheckOutlinedIcon />
							<span className={styles.count}>
								{productsCount} {t("incomeGroups.productsCount")}
							</span>
							<span className={styles.groupName}>{group}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default IncomeGroups;
