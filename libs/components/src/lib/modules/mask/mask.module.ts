import { NgModule } from '@angular/core';

import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
  clearIfNotMatch: true,
};

@NgModule({
  imports: [NgxMaskDirective, NgxMaskPipe],
  exports: [NgxMaskDirective, NgxMaskPipe],
  providers: [provideEnvironmentNgxMask(maskConfig)],
})
export class PrizmMaskModule {}
