import { NgModule } from '@angular/core';
import { PrizmIconsSvgModule } from './svg-icon/svg-icon.module';

@NgModule({
  imports: [
    PrizmIconsSvgModule
  ],
  exports: [
    PrizmIconsSvgModule
  ]
})
export class PrizmIconsModule {}

