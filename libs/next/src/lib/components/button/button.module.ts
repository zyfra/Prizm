import {NgModule} from '@angular/core';
import {ZuiButtonComponent} from './button.component';
import {CommonModule} from "@angular/common";
import {ZuiWrapperModule} from "../../directives/wrapper";
import {ZuiIconModule} from "../icon";
import {CallFuncModule} from "@digital-plant/zyfra-helpers";
import {ZuiSplitButtonComponent} from "./split-button/split-button.component";

@NgModule({
  declarations: [ZuiButtonComponent, ZuiSplitButtonComponent],
  imports: [
    CommonModule,
    ZuiWrapperModule,
    ZuiIconModule,
    CallFuncModule,
  ],
  exports: [ZuiButtonComponent, ZuiSplitButtonComponent],
})
export class ZuiButtonModule {}
