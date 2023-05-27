import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { useLocation } from 'react-router-dom';

import ProductsComponent from '@components/layout/modules/Products/ProductsComponent';

const Products = () => {
  const location = useLocation();
  const [showProducts, setShowProducts] = useState(false);

  const transitions = useTransition(showProducts, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
  });

  useEffect(() => {
    setShowProducts(true);

   return () => setShowProducts(false)
  }, [location]);

  return (
    <div>
      {transitions((style, item) =>
        item && (
          <animated.div style={{...style, backgroundColor: "#e8eceb"}}>
            <ProductsComponent />
          </animated.div>
        )
      )}
    </div>
  );
};

export default Products;