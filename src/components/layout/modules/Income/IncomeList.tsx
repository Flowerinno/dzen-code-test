import React from "react";

import { ProductsI } from "@redux/types/productsTypes";

import styles from "./IncomeList.module.scss";

interface IncomeListProps {
	products: ProductsI[];
}

const IncomeList: React.FC<IncomeListProps> = ({ products }) => {
	return <div className={styles.incomeListContainer}>IncomeList</div>;
};

export default IncomeList;
