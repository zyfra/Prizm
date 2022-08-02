import {NgModule} from '@angular/core';
import {ZuiDropdownHostComponent} from './dropdown-host.component';
import {ZuiOverlayModule} from "../../modules/overlay";
import {PolymorphModule} from "../../directives";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
      ZuiOverlayModule,
      PolymorphModule,
      CommonModule
    ],
    declarations: [ZuiDropdownHostComponent],
    exports: [ZuiDropdownHostComponent],
})
export class ZuiDropdownHostModule {}
