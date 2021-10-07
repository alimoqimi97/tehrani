import React, { lazy, Suspense } from 'react';

const LazySidebarContent = lazy(() => import('./SidebarContent'));

const SidebarContent = props => (
  <Suspense fallback={null}>
    <LazySidebarContent {...props} />
  </Suspense>
);

export default SidebarContent;
