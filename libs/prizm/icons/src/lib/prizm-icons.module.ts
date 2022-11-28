import { NgModule } from '@angular/core';
import { PrizmIconSvgModule } from './svg-icon/svg-icon.module';
import { PrizmIconModule } from './icon/icon.module';

@NgModule({
  imports: [
    PrizmIconSvgModule,
    PrizmIconModule
  ],
  exports: [
    PrizmIconSvgModule,
    PrizmIconModule
  ]
})
export class PrizmIconsModule {}

