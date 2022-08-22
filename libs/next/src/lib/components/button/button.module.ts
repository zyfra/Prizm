import {NgModule} from '@angular/core';
import {ZuiButtonComponent} from './button.component';
import {CommonModule} from "@angular/common";
import {ZuiWrapperModule} from "../../directives/wrapper";
import {ZuiIconModule} from "../icon";
import {ZuiCallFuncModule} from "@digital-plant/zyfra-helpers";
import {ZuiSplitButtonComponent} from "./split-button/split-button.component";
import {ZuiLoaderModule} from '../loader/loader.module';

@NgModule({
  declarations: [ZuiButtonComponent, ZuiSplitButtonComponent],
  imports: [
    CommonModule,
    ZuiWrapperModule,
    ZuiIconModule,
    ZuiLoaderModule,
    ZuiCallFuncModule,
  ],
  exports: [ZuiButtonComponent, ZuiSplitButtonComponent],
})
export class ZuiButtonModule {}
