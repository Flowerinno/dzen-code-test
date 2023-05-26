import React from "react";

import { ProductsI } from "@redux/types/productsTypes";

import styles from "./IncomeList.module.scss";

interface IncomeListProps {
	products: ProductsI[];
}

const IncomeList: React.FC<IncomeListProps> = ({ products }) => {
	return (
		<div className={styles.incomeListContainer}>
			<ul className={styles.incomeList}>
				{products.map((product) => (
					<li className={styles.incomeListItem} key={product.id}>
						<span>{product.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default IncomeList;
