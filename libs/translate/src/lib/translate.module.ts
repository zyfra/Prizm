import { NgModule, ModuleWithProviders } from '@angular/core';
import { TranslateCompiler, TranslateLoaderFactory, TranslateParser, TranslateService } from './core';

import { TranslatePipe } from './pipe/translate.pipe';
import { TranslateFakeCompiler } from './service/translate-compiler-fake';
import { TranslateStore } from './service/translate.store';
import { TranslateDefaultParser } from './service/translate-default.parser';
import { TranslateImplService } from './service/translate-impl.service';
import { TranslateLoaderGetter } from './service/translate-loader-getter';

@NgModule({
  declarations: [TranslatePipe],
  exports: [TranslatePipe],
})
export class TranslateModule {
  /**
   * Use this method in your root module to provide the TranslateService
   */
  public static forRoot(): ModuleWithProviders<TranslateModule> {
    return {
      ngModule: TranslateModule,
      providers: [
        TranslateStore,
        TranslatePipe,
        { provide: TranslateLoaderFactory, useClass: TranslateLoaderGetter },
        { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
        { provide: TranslateParser, useClass: TranslateDefaultParser },
        { provide: TranslateService, useClass: TranslateImplService },
      ],
    };
  }
}
