import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuiInputTextComponent } from './input-directives/zui-input-text.directive';
import { InputLayoutComponent } from './input-layout/input-layout.component';
import { InputInvalidSubtextComponent } from './input-invalid-subtext/input-invalid-subtext.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [InputLayoutComponent, ZuiInputTextComponent, InputInvalidSubtextComponent],
  exports: [InputLayoutComponent, ZuiInputTextComponent, InputInvalidSubtextComponent, NgxMaskModule],
  imports: [CommonModule, NgxMaskModule.forRoot()],
})
export class InputModule {}
