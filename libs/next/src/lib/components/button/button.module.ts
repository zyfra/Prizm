import {NgModule} from '@angular/core';
import {ZuiButtonComponent} from './button.component';
import {CommonModule} from "@angular/common";
import {ZuiWrapperModule} from "../../directives/wrapper";

@NgModule({
  declarations: [ZuiButtonComponent],
  imports: [CommonModule, ZuiWrapperModule],
  exports: [ZuiButtonComponent],
})
export class ZuiButtonModule {}
