import React from "react";

import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import { setActiveProduct } from "@redux/slices/productsSlice";
import { useAppDispatch } from "@redux/hooks";

import { useTranslation } from "react-i18next";

import styles from "./IncomeGroups.module.scss";

interface GroupsI {
	type: string;
}

interface IncomeGroupsProps {
	groups: GroupsI[];
	activeType: string | null;
	productsCount: number;
}

const IncomeGroups: React.FC<IncomeGroupsProps> = ({
	groups,
	activeType,
	productsCount,
}) => {
	const { t } = useTranslation("income");

	const dispatch = useAppDispatch();

	const setActive = (type: string) => {
		dispatch(setActiveProduct(type));
	};

	return (
		<div className={styles.incomeGroups}>
			<ul className={styles.incomeGroupsList}>
				{groups.map((group, index) => {
					return (
						<li key={index} className={`${!activeType ? styles.item : styles.activeItem}`}>
							<div className={styles.count}>
								<FactCheckOutlinedIcon sx={{heigt: 20, width: 20}}/>
								{productsCount}
								<br />
								{!activeType ? t("incomeGroups.productsCount"): null}
							</div>
							<span className={styles.groupDate}>2017/06/29</span>
							<span
								className={styles.groupName}
								onClick={() => setActive(group.type)}
							>
								{group.type}
							</span>

							{activeType === group.type ? <span className={styles.arrow}>
								<KeyboardArrowRightOutlinedIcon
									sx={{ height: 50, width: 50, color: "white" }}
								/>
							</span> : null}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default IncomeGroups;
