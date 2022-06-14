import {NgModule} from '@angular/core';

import {ZuiHintDirective} from './hint.directive';
import {ZuiHintContainerComponent} from "./hint-container.component";
import {CommonModule} from "@angular/common";
import {PolymorpheusModule} from "../polymorpheus";

@NgModule({
  imports: [
    CommonModule,
    PolymorpheusModule
  ],
  declarations: [ZuiHintDirective, ZuiHintContainerComponent],
  exports: [ZuiHintDirective],
})
export class ZuiHintModule {}
