import React from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { useTranslation } from "react-i18next";

import styles from "./ProductsHeader.module.scss";

interface ProductsHeaderProps {
	count: number;
	activeType: string;
	types: string[];
	selectType: (type: string) => void;
}

const ProductsHeader: React.FC<ProductsHeaderProps> = ({
	count,
	activeType,
	types,
	selectType,
}) => {
	const { t } = useTranslation("products");

	const handleChange = (event: SelectChangeEvent) => {
		selectType(event.target.value);
	};

	return (
		<header className={styles.productsHeader}>
			<h2>
				{t("title")} / {count}
			</h2>
			<div className={styles.form}>
				<span>{t("type")}:</span>
				<FormControl>
					<Select value={activeType} onChange={handleChange}>
						<MenuItem value="All">
							<em>All</em>
						</MenuItem>
						{types.map((type, index) => {
							return (
								<MenuItem key={index} value={type}>
									{type}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</div>
			<div>
				<span>{t("specification")}:</span>
				<Select />
			</div>
		</header>
	);
};

export default ProductsHeader;
