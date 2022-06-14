import {NgModule} from '@angular/core';
import {ZuiDropdownHostComponent} from './tooltip.component';
import {ZuiOverlayModule} from "../../modules/overlay";
import {PolymorpheusModule} from "../../directives";

@NgModule({
    imports: [
      ZuiOverlayModule,
      PolymorpheusModule
    ],
    declarations: [ZuiDropdownHostComponent],
    exports: [ZuiDropdownHostComponent],
})
export class ZuiDropdownHostModule {}
