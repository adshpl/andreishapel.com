import { registerTranslateConfig, use, get } from 'lit-translate';
import { logger } from './logger';
import { Locales } from '../constants/locales';
import enLocales from '../locales/en.json';

export const setupTranslations = (): Promise<void> => {
  const { English } = Locales;

  registerTranslateConfig({
    loader: async (language: string) => {
      switch (language) {
        case English:
          return enLocales;
        default:
          return enLocales;
      }
    }
  });

  return use(English);
};

export const translate = (key: string) => {
  const value = get(key);
  console.log('@@', key, value);
  if (!value) {
    logger.error(`Translation not found for key: ${key}`);
    return '';
  }

  return get(key);
};
