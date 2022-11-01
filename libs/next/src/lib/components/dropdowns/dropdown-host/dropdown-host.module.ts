import { NgModule } from '@angular/core';
import { ZuiDropdownHostComponent } from './dropdown-host.component';
import { PzmOverlayModule } from '../../../modules/overlay';
import {
  PolymorphModule,
  PzmDropdownZoneModule,
  PzmLifecycleModule,
  PzmMutationObserveModule,
} from '../../../directives';
import { CommonModule } from '@angular/common';
import { PzmShadowModule } from '../../../directives/shadow';

@NgModule({
    imports: [
      CommonModule,
      PzmOverlayModule,
      PzmLifecycleModule,
      PzmShadowModule,
      PolymorphModule,
      PzmDropdownZoneModule,
      PzmMutationObserveModule,
    ],
    declarations: [ZuiDropdownHostComponent],
    exports: [ZuiDropdownHostComponent],
})
export class ZuiDropdownHostModule {}
