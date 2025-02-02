import { type FC, lazy } from 'react';
import * as Router from 'react-router-dom';

const Top = lazy(() => import('../../../pages/Top/Top'));
const OrderComplete = lazy(() => import('../../../pages/OrderComplete/OrderComplete'));
const Order = lazy(() => import('../../../pages/Order/Order'));
const ProductDetail = lazy(() => import('../../../pages/ProductDetail/ProductDetail'));
const NotFound = lazy(() => import('../../../pages/NotFound/NotFound'));

import { useScrollToTop } from './hooks';

export const Routes: FC = () => {
  useScrollToTop();

  return (
    <Router.Routes>
      <Router.Route element={<Top />} path="/" />
      <Router.Route element={<ProductDetail />} path="/product/:productId" />
      <Router.Route element={<Order />} path="/order" />
      <Router.Route element={<OrderComplete />} path="/order/complete" />
      <Router.Route element={<NotFound />} path="*" />
    </Router.Routes>
  );
};
