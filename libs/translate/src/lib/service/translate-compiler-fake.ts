import { Injectable } from '@angular/core';
import { TranslateCompiler } from '../core';

@Injectable()
export class TranslateFakeCompiler extends TranslateCompiler {
  public compile(value: string, lang: string): string | Function {
    return value;
  }

  public compileTranslations(translations: any, lang: string): any {
    return translations;
  }
}
