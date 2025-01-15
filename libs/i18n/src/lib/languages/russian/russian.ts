import { PrizmLanguage } from '../../interfaces/language';
import { PRIZM_RUSSIAN_COLUMN_SETTINGS } from './column-settings';
import { PRIZM_RUSSIAN_LANGUAGE_CORE } from './core';
import { PRIZM_RUSSIAN_CRON } from './cron';
import { PRIZM_RUSSIAN_FILE_UPLOAD } from './file-upload';
import { PRIZM_RUSSIAN_INPUT } from './input';
import { PRIZM_RUSSIAN_INPUT_LAYOUT_DATE_RELATIVE } from './input-date-layout-relative';
import { PRIZM_RUSSIAN_INPUT_LAYOUT_DATE_TIME } from './input-layout-date-time';
import { PRIZM_RUSSIAN_INPUT_LAYOUT_DATE_TIME_RANGE } from './input-layout-date-time-range';
import { PRIZM_RUSSIAN_TIME_PAGINATION } from './time-pagination';
import { PRIZM_RUSSIAN_TIME_PICKER } from './time-picker';
import { PRIZM_RUSSIAN_LANGUAGE_KIT } from './kit';
import { PRIZM_RUSSIAN_PAGINATOR } from './paginator';
import { PRIZM_RUSSIAN_SELECT } from './select';

export const PRIZM_RUSSIAN_LANGUAGE = {
  name: `russian`,
  shortName: `ru`,
  ...PRIZM_RUSSIAN_LANGUAGE_CORE,
  ...PRIZM_RUSSIAN_LANGUAGE_KIT,
  ...PRIZM_RUSSIAN_FILE_UPLOAD,
  ...PRIZM_RUSSIAN_INPUT,
  ...PRIZM_RUSSIAN_INPUT_LAYOUT_DATE_RELATIVE,
  ...PRIZM_RUSSIAN_INPUT_LAYOUT_DATE_TIME,
  ...PRIZM_RUSSIAN_INPUT_LAYOUT_DATE_TIME_RANGE,
  ...PRIZM_RUSSIAN_CRON,
  ...PRIZM_RUSSIAN_COLUMN_SETTINGS,
  ...PRIZM_RUSSIAN_PAGINATOR,
  ...PRIZM_RUSSIAN_TIME_PAGINATION,
  ...PRIZM_RUSSIAN_TIME_PICKER,
  ...PRIZM_RUSSIAN_SELECT,
} as PrizmLanguage;
