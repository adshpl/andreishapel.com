import { registerTranslateConfig, use, get } from 'lit-translate';
import { loggerService } from './logger.service';
import { LocalesConstant } from '../constants/locales.constant';
import enLocales from '../locales/en.json';

export const setupTranslations = (): Promise<void> => {
  const { English } = LocalesConstant;

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
  const value = get(key) || null;
  const translationValueNotFound = !value || (value.startsWith('[') && value.endsWith(']'));
  if (translationValueNotFound) {
    loggerService.warn(`Translation not found for key: ${key}`);
    return value;
  }

  return get(key);
};
