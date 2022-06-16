import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ZuiDataListComponent} from './data-list.component';
import {PolymorpheusModule} from "../../directives";
import {ZuiIconModule} from "../icon";

@NgModule({
  imports: [
    CommonModule,
    PolymorpheusModule,
    ZuiIconModule
  ],
    declarations: [ZuiDataListComponent],
    exports: [ZuiDataListComponent],
})
export class ZuiDataListModule {}
