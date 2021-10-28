import React, { lazy, Suspense } from 'react';

const LazyUserInfoEditor = lazy(() => import('./UserInfoEditor'));

const UserInfoEditor = props => (
  <Suspense fallback={null}>
    <LazyUserInfoEditor {...props} />
  </Suspense>
);

export default UserInfoEditor;
