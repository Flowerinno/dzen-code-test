import { useEffect, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { useTranslation } from 'react-i18next';
import { setActiveProduct } from '@redux/slices/productsSlice';

import styles from './ProductsList.module.scss';

const ProductsComponent = () => {
	const dispatch = useAppDispatch();

	const { activeProducts, activeType } = useAppSelector(state => state.products);

	const productType = activeType || 'Monitors';

	useEffect(() => {
		selectHandler(productType);

		return () => {}
	}, [activeType]);
	
	const selectHandler = useCallback((type: string): void => {
		dispatch(setActiveProduct(type));
	},[activeType]);

	const { t } = useTranslation();

	return <div className={styles.productsContainer}>
		<ul>
			{activeProducts?.map(product => {
				return <li>{product.title}</li>
			})}
		</ul>
	</div>;
};

export default ProductsComponent;
