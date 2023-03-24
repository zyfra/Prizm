import { PrizmLanguage } from '../../interfaces/language';
import { PRIZM_RUSSIAN_LANGUAGE_CORE } from './core';
import { PRIZM_RUSSIAN_LANGUAGE_KIT } from './kit';
import { PRIZM_RUSSIAN_FILE_UPLOAD } from './file-upload';

export const PRIZM_RUSSIAN_LANGUAGE = {
  name: `russian`,
  ...PRIZM_RUSSIAN_LANGUAGE_CORE,
  ...PRIZM_RUSSIAN_LANGUAGE_KIT,
  ...PRIZM_RUSSIAN_FILE_UPLOAD,
} as PrizmLanguage;
