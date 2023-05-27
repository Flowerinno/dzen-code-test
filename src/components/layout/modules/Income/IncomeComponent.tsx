import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

import IncomeList from "./IncomeList";
import IncomeGroups from "./IncomeGroups";

import { useTranslation } from "react-i18next";
import { useAppSelector } from "@redux/hooks";

import styles from "./IncomeComponent.module.scss";

interface IncomeComponentProps {}

const IncomeComponent = () => {
	const { t } = useTranslation("income");

	const {products, activeType, activeProducts} = useAppSelector((state) => state.products);


	const { groups } = useAppSelector((state) => state.groups);

	return (
		<div className={styles.incomeContainer}>
			<header>
				<AddCircleTwoToneIcon
					sx={{
						width: 30,
						height: 30,
						backgroundColor: "whitesmoke",
						borderRadius: "50%",
						color: "black",
					}}
					titleAccess="Add new group"
				/>
				<h1>
					{t("header")} / {products?.length}
				</h1>
			</header>
			<div className={styles.incomeContent}>
				<IncomeGroups groups={groups} productsCount={products.length ?? 0} activeType={activeType}/>
				{activeType && <IncomeList products={activeProducts ?? products} />}
			</div>
		</div>
	);
};

export default IncomeComponent;
