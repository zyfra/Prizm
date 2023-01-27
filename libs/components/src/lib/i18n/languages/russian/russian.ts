import { PrizmLanguage } from '../../interfaces/language';
import { PRIZM_RUSSIAN_LANGUAGE_CORE } from './core';
import { PRIZM_RUSSIAN_LANGUAGE_KIT } from './kit';

export const PRIZM_RUSSIAN_LANGUAGE = {
  name: `russian`,
  ...PRIZM_RUSSIAN_LANGUAGE_CORE,
  ...PRIZM_RUSSIAN_LANGUAGE_KIT,
} as PrizmLanguage;
