import { Router } from '@vaadin/router';
import { routesConstant } from '../constants/routes.constant';

export const setupRoutes = (mountTo: Element | null): Promise<Node> => {
  if (!mountTo) {
    return Promise.reject('Routes should be mounted to existing element');
  }

  const router = new Router(mountTo);
  return router.setRoutes(routesConstant);
};
