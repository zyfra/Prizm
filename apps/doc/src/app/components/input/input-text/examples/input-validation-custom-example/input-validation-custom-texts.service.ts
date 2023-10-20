import { Injectable } from '@angular/core';
import { PrizmInputControl, PrizmInputValidationTexts } from '@prizm-ui/components';

@Injectable()
export class InputValidationCustomTextsService extends PrizmInputValidationTexts {
  private readonly invalidTextCustomMap = new Map<string, string>([['required', 'Обязательное поле']]);

  public override getText(key: string, control?: PrizmInputControl<unknown>): string | undefined {
    return this.invalidTextCustomMap.get(key);
  }
}
