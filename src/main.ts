import { setupRoutes } from './services/router.service';
import { setupTranslations } from './services/i18n.service';
import { loggerService } from './services/logger.service';

(async () => {
  loggerService.info('Application initialization started');

  try {
    const applicationElement = document.querySelector('#application');
    await Promise.all([
      setupTranslations(),
      setupRoutes(applicationElement),
    ]);
  } catch (error) {
    loggerService.error(`Application initialization error: ${error}`);
  }

  loggerService.info('Application initialization finished');
})();
