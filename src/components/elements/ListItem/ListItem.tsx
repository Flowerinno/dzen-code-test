import React from "react";

import Brightness1Icon from "@mui/icons-material/Brightness1";
import MonitorIcon from "@mui/icons-material/Monitor";
import DeleteIcon from "@mui/icons-material/Delete";

import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@redux/hooks";

import { openDialog } from "@redux/slices/dialogSlice";

import styles from "./ListItem.module.scss";

import { ProductsI } from "@redux/types/productsTypes";

interface ListItemProps {
	product: ProductsI | null;
	selectProduct: (product: ProductsI) => void;
	isDialog?: boolean;
	isFull?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
	product,
	selectProduct = null,
	isDialog = false,
	isFull = false,
}) => {
	let availableColor = product?.isAvailable ? "green" : "red";

	const dispatch = useAppDispatch();

	const selectHandler = (product: ProductsI) => {
		if (product && selectProduct) {
			selectProduct(product);
			dispatch(openDialog());
		}
	};

	const { t } = useTranslation("listItem");

	if (!product) return null;
	
	return (
		<div className={styles.listItem}>
			<>
				<Brightness1Icon
					sx={{ height: 20, width: 20, padding: 0, margin: 0, color: "orange" }}
				/>
				<MonitorIcon sx={{ height: 45, width: 45, padding: 0, margin: 0 }} />
			</>
			<div className={styles.listItemInfo}>
				<h3>{product.title}</h3>
				<p>{product.specification}</p>
			</div>
			<p style={{ color: availableColor }}>
				{product.isAvailable ? t("isAvailable") : t("notAvailable")}
			</p>
			{isFull && (
				<div className="date">
					<p>{product.date}</p>
				</div>
			)}
			{isFull && <span>{product.isNew ? t("new") : t("notNew")}</span>}
			{isFull && (
				<div className={styles.listItemPrice}>
					<p>
						{product.price[0].value} {product.price[0].symbol}
					</p>
					<p>
						{product.price[1].value} {product.price[1].symbol}
					</p>
				</div>
			)}
			{isFull && <span>{product.group}</span>}
			{!isDialog && (
				<DeleteIcon
					sx={{ width: 40, fontSize: 20 }}
					className={styles.deleteIcon}
					onClick={() => selectHandler(product)}
				/>
			)}
		</div>
	);
};

export default ListItem;
