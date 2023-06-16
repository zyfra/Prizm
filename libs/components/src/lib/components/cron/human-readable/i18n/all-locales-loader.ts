import { PrizmCronHRLocale } from './locale';
import * as allLocales from './all-locales';

export class PrizmCronHRAllLocalesLoader {
  public load(availableLocales: { [name: string]: PrizmCronHRLocale }) {
    for (const property in allLocales) {
      // eslint-disable-next-line no-prototype-builtins
      if (typeof allLocales[property] !== 'undefined') {
        availableLocales[property] = new (allLocales as any)[property]() as PrizmCronHRLocale;
      }
    }
  }
}
