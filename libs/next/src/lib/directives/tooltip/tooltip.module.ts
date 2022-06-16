import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PolymorpheusModule} from "../polymorpheus";
import {ZuiTooltipDirective} from './tooltip.directive';
import {ZuiHintModule} from '../hint';
import {ZuiTooltipContainerComponent} from "./tooltip-container.component";
import {ZuiIconModule} from "../../components/icon";

@NgModule({
  imports: [
    CommonModule,
    PolymorpheusModule,
    ZuiHintModule,
    ZuiIconModule
  ],
  declarations: [
    ZuiTooltipDirective,
    ZuiTooltipContainerComponent
  ],
  exports: [ZuiTooltipDirective],
})
export class ZuiTooltipModule {}
