import React from "react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

import { setActiveProduct } from "@redux/slices/productsSlice";
import { useAppDispatch } from "@redux/hooks";

import { useTranslation } from "react-i18next";

import styles from "./IncomeGroups.module.scss";

interface GroupsI {
	name: string;
	type: string;
	price: { value: number; symbol: string; isDefault: number }[];
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
						<li
							key={index}
							className={`${!activeType ? styles.item : styles.activeItem}`}
						>
							{!activeType && (
								<span
									className={styles.groupName}
									onClick={() => setActive(group.type)}
								>
									{group.name}
								</span>
							)}
							<div className={styles.count}>
								<FactCheckOutlinedIcon sx={{ heigt: 20, width: 20 }} />
								{productsCount}
								<br />
								{!activeType ? t("incomeGroups.productsCount") : null}
							</div>
							<span className={styles.groupDate}>2017/06/29</span>
							<span className={styles.groupPrice}>
								<p>
									{group.price[0].value} {group.price[0].symbol}
								</p>
								<p>
									{group.price[1].value} {group.price[1].symbol}
								</p>
							</span>
							{!activeType && <DeleteForeverIcon />}
							{activeType === group.type ? (
								<span className={styles.arrow}>
									<KeyboardArrowRightOutlinedIcon
										sx={{ height: 50, width: 50, color: "white" }}
									/>
								</span>
							) : null}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default IncomeGroups;
