import React, { lazy, Suspense } from 'react';

const LazyDashboardSidebar = lazy(() => import('./DashboardSidebar'));

const DashboardSidebar = props => (
  <Suspense fallback={null}>
    <LazyDashboardSidebar {...props} />
  </Suspense>
);

export default DashboardSidebar;
