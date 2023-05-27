import React from 'react';
import { ProductsI } from "@redux/types/productsTypes";

import styles from './ProductsList.module.scss'

interface ProductsListProps {
    products: ProductsI[]
}

const ProductsList: React.FC<ProductsListProps> = ({products}) => {
    return <div>1

    </div>
}
export default ProductsList;