import { useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "@redux/hooks";
import { useTranslation } from "react-i18next";

import { setActiveProduct } from "@redux/slices/productsSlice";
import { selectProduct } from "@redux/slices/productsSlice";
import { openDialog } from "@redux/slices/dialogSlice";

import ListItem from "@components/elements/ListItem/ListItem";

import styles from "./ProductsComponent.module.scss";

import { ProductsI } from "@redux/types/productsTypes";

const ProductsComponent = () => {
	const dispatch = useAppDispatch();

	const { products, activeProducts, activeType } = useAppSelector(
		(state) => state.products
	);

	const productType = activeType || "Monitors";

	useEffect(() => {
		selectType(productType);

		return () => {};
	}, [activeType]);

	const selectType = useCallback(
		(type: string): void => {
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

	const { t } = useTranslation("products");

	let list = activeProducts ? activeProducts : products;

	return (
		<div className={styles.productsContainer}>
			<header>
				<h2>
					{t("title")} / {activeProducts?.length}
				</h2>
			</header>
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
