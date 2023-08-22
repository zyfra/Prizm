import { PrizmCronHRLocale } from './locale';

export interface PrizmCronHRLocaleLoader {
  load(availableLocales: { [name: string]: PrizmCronHRLocale }): void;
}
