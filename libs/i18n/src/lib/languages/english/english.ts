import { PrizmLanguage } from '../../interfaces/language';
import { PRIZM_ENGLISH_LANGUAGE_CORE } from './core';
import { PRIZM_ENGLISH_LANGUAGE_KIT } from './kit';
import { PRIZM_ENGLISH_FILE_UPLOAD } from './file-upload';
import { PRIZM_ENGLISH_CRON } from './cron';
import { PRIZM_ENGLISH_INPUT_LAYOUT_DATE_RELATIVE } from './input-date-layout-relative';
import { PRIZM_ENGLISH_COLUMN_SETTINGS } from './column-settings';
import { PRIZM_ENGLISH_PAGINATOR } from './paginator';
import { PRIZM_RUSSIAN_INPUT } from './input';

export const PRIZM_ENGLISH_LANGUAGE = {
  name: `english`,
  shortName: `en`,
  ...PRIZM_ENGLISH_LANGUAGE_CORE,
  ...PRIZM_ENGLISH_LANGUAGE_KIT,
  ...PRIZM_ENGLISH_FILE_UPLOAD,
  ...PRIZM_RUSSIAN_INPUT,
  ...PRIZM_ENGLISH_INPUT_LAYOUT_DATE_RELATIVE,
  ...PRIZM_ENGLISH_CRON,
  ...PRIZM_ENGLISH_COLUMN_SETTINGS,
  ...PRIZM_ENGLISH_PAGINATOR,
} as PrizmLanguage;
