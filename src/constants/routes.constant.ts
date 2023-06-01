import { Route } from '@vaadin/router';
export * from '../pages/home.page';
export * from '../pages/not-found.page';

export const routesConstant: Route[] = [
  {
    path: '/',
    component: 'home-page',
  },
  {
    path: '(.*)',
    component: 'not-found-page',
  },
];
