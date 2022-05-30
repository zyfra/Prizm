import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuiInputTextComponent } from './input-directives/zui-input-text.directive';
import { InputLayoutComponent } from './input-layout/input-layout.component';

@NgModule({
  declarations: [InputLayoutComponent, ZuiInputTextComponent],
  exports: [InputLayoutComponent, ZuiInputTextComponent],
  imports: [CommonModule],
})
export class InputModule {}
