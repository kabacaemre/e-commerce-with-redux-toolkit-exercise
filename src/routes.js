/* eslint-disable import/prefer-default-export */

// Page Components
import Home from './theme/pages/Home/index';
import ProductDetail from './theme/pages/ProductDetail/index';
import NotFound from './theme/pages/NotFound/index';

export const routes = [
  {
    id: '1',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    id: '2',
    path: '/product/:id',
    exact: true,
    component: ProductDetail,
  },
  {
    id: '3',
    path: '*',
    component: NotFound,
  },
];
