import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';

import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import IncomeList from "./IncomeList";
import IncomeGroups from "./IncomeGroups";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@redux/hooks";

import styles from "./IncomeComponent.module.scss";

const IncomeComponent = () => {
  const location = useLocation();

  const [showIncome, setShowIncome] = useState(false);


  const transitions = useTransition(showIncome, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
  });

  useEffect(() => {
    setShowIncome(true);
  }, [location]);

  const { t } = useTranslation("income");

  const { products, activeType, activeProducts } = useAppSelector((state) => state.products);

  const { groups } = useAppSelector((state) => state.groups);

  return (
    <>
      {transitions((style, item) =>
        item && (
          <animated.div style={style} className={styles.incomeContainer}>
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
              <IncomeGroups groups={groups} productsCount={products.length ?? 0} activeType={activeType} />
              {activeType && <IncomeList products={activeProducts ?? products} />}
            </div>
          </animated.div>
        )
      )}
    </>
  );
};

export default IncomeComponent;