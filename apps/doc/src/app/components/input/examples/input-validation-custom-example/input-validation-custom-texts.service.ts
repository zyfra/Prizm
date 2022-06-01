import { Injectable } from '@angular/core';
import { ZuiInputValidationTexts } from '@digital-plant/zui-components';

@Injectable()
export class InputValidationCustomTextsService extends ZuiInputValidationTexts {
  private readonly invalidTextCustomMap = new Map<string, string>([['required', 'Очень обязательное поле']]);

  public override getText(key: string): string | undefined {
    return this.invalidTextCustomMap.get(key);
  }
}
