import { NgModule } from '@angular/core';
import { ZuiDropdownHostComponent } from './dropdown-host.component';
import { ZuiOverlayModule } from '../../../modules/overlay';
import {
  PolymorphModule,
  ZuiDropdownZoneModule,
  ZuiLifecycleModule,
  ZuiMutationObserveModule,
} from '../../../directives';
import { CommonModule } from '@angular/common';
import { ZuiShadowModule } from '../../../directives/shadow';

@NgModule({
    imports: [
      CommonModule,
      ZuiOverlayModule,
      ZuiLifecycleModule,
      ZuiShadowModule,
      PolymorphModule,
      ZuiDropdownZoneModule,
      ZuiMutationObserveModule,
    ],
    declarations: [ZuiDropdownHostComponent],
    exports: [ZuiDropdownHostComponent],
})
export class ZuiDropdownHostModule {}
