import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

import IncomeList from "./IncomeList";
import IncomeGroups from "./IncomeGroups";

import { useTranslation } from "react-i18next";
import { useAppSelector } from "@redux/hooks";

import styles from "./IncomeComponent.module.scss";

interface IncomeComponentProps {}

const IncomeComponent = () => {
	const { t } = useTranslation("income");

	const products = useAppSelector((state) => state.products);
	const { groups } = useAppSelector((state) => state.groups);

	return (
		<div className={styles.incomeContainer}>
			<header>
				<AddCircleTwoToneIcon
					sx={{
						width: 40,
						height: 40,
						backgroundColor: "green",
						borderRadius: "50%",
						color: "white",
					}}
				/>
				<h1>
					{t("header")} / {products?.length ?? 0}
				</h1>
			</header>
			<div className={styles.incomeContent}>
				<IncomeGroups groups={groups} productsCount={products.length ?? 0} />
				<IncomeList products={products} />
			</div>
		</div>
	);
};

export default IncomeComponent;
