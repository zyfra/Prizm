import { inject } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { isObservable, of } from 'rxjs';
import { PRIZM_LANGUAGE } from '../tools/language';
import { PrizmI18nFn } from '../interfaces/language';

export abstract class PrizmI18nCustomService<D extends Record<string, any>> {
  protected language$ = inject(PRIZM_LANGUAGE);
  abstract fn: PrizmI18nFn<D>;
  readonly dictionary$ = this.language$.pipe(
    switchMap(({ name }) => {
      const result = this.fn(name);
      if (isObservable(result)) return result;
      return of(result);
    })
  );
}
