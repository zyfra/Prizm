import { PrizmCronHRLocale } from './locale';
import { en } from './locales/en';

export class prizmCronHREnLocaleLoader {
  public load(availableLocales: { [name: string]: PrizmCronHRLocale }) {
    availableLocales['en'] = new en();
  }
}
