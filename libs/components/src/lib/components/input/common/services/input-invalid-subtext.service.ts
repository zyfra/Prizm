import { inject, Injectable } from '@angular/core';
import { PrizmInputControl } from '../base';
import { Observable } from 'rxjs';
import { PrizmI18nService } from '../../../../services';
import { map } from 'rxjs/operators';

/**
 * Default class for input validation texts
 */
@Injectable()
export class PrizmInputValidationTexts {
  private i18nService = inject(PrizmI18nService, {
    optional: true,
  });
  public getText(
    key: string,
    control?: PrizmInputControl<unknown>
  ): string | null | Observable<string | null> {
    return (
      this.i18nService?.extract('inputLayout').pipe(
        map((result: Record<string, string>) => {
          return result[key] ?? null;
        })
      ) ?? null
    );
  }
}
