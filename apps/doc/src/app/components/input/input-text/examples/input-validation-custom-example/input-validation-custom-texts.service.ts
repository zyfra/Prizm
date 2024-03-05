import { Injectable } from '@angular/core';
import { PrizmInputControl, PrizmInputValidationTexts } from '@prizm-ui/components';
import { Observable } from 'rxjs';

@Injectable()
export class InputValidationCustomTextsService extends PrizmInputValidationTexts {
  private readonly invalidTextCustomMap = new Map<string, string>([['required', 'Самое обязательное поле']]);

  public override getText(
    key: string,
    control?: PrizmInputControl<unknown>
  ): string | null | Observable<string | null> {
    return this.invalidTextCustomMap.get(key) ?? null;
  }
}
