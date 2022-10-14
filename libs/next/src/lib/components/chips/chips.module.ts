import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiChipsComponent } from './chips.component';
import { ZuiCallFuncModule } from '@digital-plant/zyfra-helpers';
import { ZuiHintModule } from '../../directives';

@NgModule({
  imports: [
    CommonModule,
    ZuiCallFuncModule,
    ZuiHintModule
  ],
  declarations: [
    ZuiChipsComponent
  ],
  exports: [
    ZuiChipsComponent
  ],
})
export class ZuiChipsModule {}

