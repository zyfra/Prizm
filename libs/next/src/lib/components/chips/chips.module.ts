import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmChipsComponent } from './chips.component';
import { PzmCallFuncModule, PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PzmElementReadyModule, PzmHintModule, PzmLifecycleModule } from '../../directives';

@NgModule({
  imports: [
    CommonModule,
    PzmCallFuncModule,
    PzmCallFuncModule,
    PzmLifecycleModule,
    PzmElementReadyModule,
    PzmLetModule,
    PzmHintModule
  ],
  declarations: [
    PzmChipsComponent
  ],
  exports: [
    PzmChipsComponent
  ],
})
export class PzmChipsModule {}

