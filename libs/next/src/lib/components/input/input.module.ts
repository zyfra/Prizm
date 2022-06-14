import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuiInputTextComponent } from './input-directives/zui-input-text.directive';
import { InputLayoutComponent } from './input-layout/input-layout.component';
import { InputInvalidSubtextComponent } from './input-invalid-subtext/input-invalid-subtext.component';
import { NgxMaskModule } from 'ngx-mask';
import { ZuiInputPhoneComponent } from './input-directives/zui-phone/zui-input-phone.directive';

@NgModule({
  declarations: [InputLayoutComponent, ZuiInputTextComponent, InputInvalidSubtextComponent, ZuiInputPhoneComponent],
  exports: [InputLayoutComponent, ZuiInputTextComponent, InputInvalidSubtextComponent, ZuiInputPhoneComponent, NgxMaskModule],
  imports: [CommonModule, NgxMaskModule.forRoot()],
})
export class InputModule {}
