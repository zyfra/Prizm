import {NgModule} from '@angular/core';
import {ZuiDropdownHostComponent} from './dropdown-host.component';
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
