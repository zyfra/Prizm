import { PrizmLanguage } from '../../interfaces/language';
import { PRIZM_RUSSIAN_LANGUAGE_CORE } from './core';
import { PRIZM_RUSSIAN_LANGUAGE_KIT } from './kit';
import { PRIZM_RUSSIAN_FILE_UPLOAD } from './file-upload';
import { PRIZM_RUSSIAN_CRON } from './cron';
import { PRIZM_RUSSIAN_INPUT_LAYOUT_DATE_RELATIVE } from './input-date-layout-relative';
import { PRIZM_RUSSIAN_COLUMN_SETTINGS } from './column-settings';
import { PRIZM_RUSSIAN_PAGINATOR } from './paginator';

export const PRIZM_RUSSIAN_LANGUAGE = {
  name: `russian`,
  shortName: `ru`,
  ...PRIZM_RUSSIAN_LANGUAGE_CORE,
  ...PRIZM_RUSSIAN_LANGUAGE_KIT,
  ...PRIZM_RUSSIAN_FILE_UPLOAD,
  ...PRIZM_RUSSIAN_INPUT_LAYOUT_DATE_RELATIVE,
  ...PRIZM_RUSSIAN_CRON,
  ...PRIZM_RUSSIAN_COLUMN_SETTINGS,
  ...PRIZM_RUSSIAN_PAGINATOR,
} as PrizmLanguage;
