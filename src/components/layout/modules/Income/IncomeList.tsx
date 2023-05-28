import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { resetActive } from "@redux/slices/productsSlice";
import { useAppDispatch } from "@redux/hooks";
import { useTranslation } from "react-i18next";

import { selectProduct } from "@redux/slices/productsSlice";

import ListItem from "@components/elements/ListItem/ListItem";

import { ProductsI } from "@redux/types/productsTypes";

import styles from "./IncomeList.module.scss";

interface GroupsI {
	name: string;
	type: string;
	price: { value: number; symbol: string; isDefault: number }[];
}

interface IncomeListProps {
	products: ProductsI[];
	activeGroup?: GroupsI;
}

const IncomeList: React.FC<IncomeListProps> = ({ products, activeGroup }) => {
	const { t } = useTranslation("dialog");

	const dispatch = useAppDispatch();

	const closeHandler = () => {
		dispatch(resetActive());
	};

	const selectProductHandler = (product: ProductsI) => {
		dispatch(selectProduct(product));
	};

	return (
		<div className={styles.incomeListContainer}>
			<IconButton onClick={closeHandler} className={styles.closeButton}>
				<CloseIcon sx={{ width: 20, height: 20 }} />
			</IconButton>
			<header className={styles.incomeListHeader}>
				<h1 className={styles.title}>{activeGroup?.name} </h1>
				<span className={styles.headerAddSpan}>
					<AddCircleIcon sx={{ width: 20, height: 20, color: "green " }} />
					{t("buttons.add")}
				</span>
			</header>
			{products?.length
				? products.map((product) => (
						<ListItem
							key={product.id}
							product={product}
							selectProduct={selectProductHandler}
						/>
				  ))
				: t("income.incomeProductsList.noProducts")}
		</div>
	);
};

export default IncomeList;
