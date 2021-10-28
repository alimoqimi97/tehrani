import React, { lazy, Suspense } from 'react';

const LazyProductsListContainer = lazy(() => import('./ProductsListContainer'));

const ProductsListContainer = props => (
  <Suspense fallback={null}>
    <LazyProductsListContainer {...props} />
  </Suspense>
);

export default ProductsListContainer;
