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
			<h2 data-testid="title">
				{t("title")} / {count}
			</h2>
			<div className={styles.form}>
				<span>{t("type")}:</span>
				<FormControl sx={{ m: 1, minWidth: 200 }} size="small">
					<Select
						value={activeType}
						onChange={handleChange}
						data-testid="select"
					>
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
			<div className={styles.form}>
				<span>{t("specification")}:</span>
				<FormControl sx={{ m: 1, width: 200 }} size="small">
					<Select />
				</FormControl>
			</div>
		</header>
	);
};

export default ProductsHeader;
