import { setupRoutes } from './services/router';
import { setupTranslations } from './services/i18n';
import { logger } from './services/logger';

(async () => {
  logger.info('Application initialization started');

  try {
    const applicationElement = document.querySelector('#application');
    await Promise.all([
      setupTranslations(),
      setupRoutes(applicationElement),
    ]);
  } catch (error) {
    logger.error(`Application initialization error: ${error}`);
  }

  logger.info('Application initialization finished');
})();
