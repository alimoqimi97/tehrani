import React, { lazy, Suspense } from 'react';

const LazyNotification = lazy(() => import('./Notification'));

const Notification = props => (
  <Suspense fallback={null}>
    <LazyNotification {...props} />
  </Suspense>
);

export default Notification;
