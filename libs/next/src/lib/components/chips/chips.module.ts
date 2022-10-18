import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiChipsComponent } from './chips.component';
import { ZuiCallFuncModule, ZuiLetModule } from '@digital-plant/zyfra-helpers';
import { ZuiHintModule, ZuiLifecycleModule, ZuiElementReadyModule } from '../../directives';

@NgModule({
  imports: [
    CommonModule,
    ZuiCallFuncModule,
    ZuiCallFuncModule,
    ZuiLifecycleModule,
    ZuiElementReadyModule,
    ZuiLetModule,
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

