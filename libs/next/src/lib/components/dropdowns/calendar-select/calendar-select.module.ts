import { NgModule } from '@angular/core';
import { ZuiDropdownHostComponent } from './calendar-select.component';
import { PzmOverlayModule } from '../../../modules/overlay';
import { PolymorphModule, PzmLifecycleModule, PzmMutationObserveModule } from '../../../directives';
import { CommonModule } from '@angular/common';
import { PzmShadowModule } from '../../../directives/shadow';

@NgModule({
    imports: [
      CommonModule,
      PzmOverlayModule,
      PzmLifecycleModule,
      PzmShadowModule,
      PolymorphModule,
      PzmMutationObserveModule,
    ],
    declarations: [ZuiDropdownHostComponent],
    exports: [ZuiDropdownHostComponent],
})
export class ZuiDropdownHostModule {}
