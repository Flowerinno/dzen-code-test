import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import { resetActive } from "@redux/slices/productsSlice";
import { useAppDispatch } from "@redux/hooks";
import { useTranslation } from "react-i18next";

import { ProductsI } from "@redux/types/productsTypes";

import styles from "./IncomeList.module.scss";


interface IncomeListProps {
	products: ProductsI[];
}

const IncomeList: React.FC<IncomeListProps> = ({ products }) => {
	const {t} = useTranslation('income');

	const dispatch = useAppDispatch();

	const closeHandler = () => {
		dispatch(resetActive());
	}
	
	return (
		<div className={styles.incomeListContainer}>
			<IconButton onClick={closeHandler} className={styles.closeButton}>
			<CloseIcon sx={{width: 20, height: 20}}/>
			</IconButton>
			{products?.length ?
			 <ul className={styles.incomeList}>
				{products.map((product) => (
					<li className={styles.incomeListItem} key={product.id}>
						<span>{product.title}</span>
					</li>
				))}
			</ul> : <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				{t('incomeProductsList.noProducts')}</span>}
		</div>
	);
};

export default IncomeList;
