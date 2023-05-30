import { Route } from '@vaadin/router';
export * from '../pages/home';
export * from '../pages/not-found';

export const routes: Route[] = [
  {
    path: '/',
    component: 'home-page',
  },
  {
    path: '(.*)',
    component: 'not-found-page',
  },
];
