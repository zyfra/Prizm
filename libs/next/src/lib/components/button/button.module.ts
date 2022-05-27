import {NgModule} from '@angular/core';
import {ZuiButtonComponent} from './button.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ZuiButtonComponent],
  imports: [CommonModule],
  exports: [ZuiButtonComponent],
})
export class ZuiButtonModule {}
