import { useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "@redux/hooks";
import { useTranslation } from "react-i18next";

import {
	setActiveProduct,
	selectProduct,
	resetActive,
} from "@redux/slices/productsSlice";

import { openDialog } from "@redux/slices/dialogSlice";

import ListItem from "@components/elements/ListItem/ListItem";
import ProductsHeader from "./ProductsHeader";

import styles from "./ProductsComponent.module.scss";

import { ProductsI } from "@redux/types/productsTypes";

const ProductsComponent = () => {
	const dispatch = useAppDispatch();

	const { products, activeProducts, activeType } = useAppSelector(
		(state) => state.products
	);

	const existingTypes = ["Monitors", "Mouse"];

	const productType = activeType || "All";

	useEffect(() => {
		return () => {};
	}, [activeType]);

	const selectType = useCallback(
		(type: string): void => {
			if (type === "All") {
				dispatch(resetActive());
				return;
			}
			dispatch(setActiveProduct(type));
		},
		[activeType]
	);

	const selectHandler = (product: ProductsI) => {
		if (product) {
			dispatch(selectProduct(product));
			dispatch(openDialog());
		}
	};

	let list = activeProducts ? activeProducts : products;

	let productsCount = list?.length || 0;

	return (
		<div className={styles.productsContainer}>
			<ProductsHeader
				count={productsCount}
				activeType={productType}
				types={existingTypes}
				selectType={selectType}
			/>
			<div className={styles.productsBody}>
				{list?.map((product) => {
					return (
						<ListItem
							key={product.id}
							product={product}
							selectProduct={selectHandler}
							isFull
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProductsComponent;
