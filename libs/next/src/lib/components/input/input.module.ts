import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZuiHintModule } from '../../directives/hint';
import { ZuiIconModule } from '../icon';
import { ZuiInputStatusTextDirective } from './input-directives/zui-input-status-text.directive';
import { ZuiInputTextComponent } from './input-directives/zui-input-text.directive';
import { InputLayoutComponent } from './input-layout/input-layout.component';
import { InputStatusSubtextComponent } from './input-invalid-subtext/input-status-subtext.component';
import { NgxMaskModule } from 'ngx-mask';
import { InputIconButtonComponent } from './input-icon-button/input-icon-button.component';

@NgModule({
  declarations: [
    InputLayoutComponent,
    ZuiInputTextComponent,
    InputStatusSubtextComponent,
    InputIconButtonComponent,
    ZuiInputStatusTextDirective,
  ],
  exports: [
    InputLayoutComponent,
    ZuiInputTextComponent,
    InputStatusSubtextComponent,
    NgxMaskModule,
    InputIconButtonComponent,
    ZuiInputStatusTextDirective,
  ],
  imports: [CommonModule, NgxMaskModule.forRoot(), ZuiIconModule, ZuiHintModule]
})
export class InputModule {}
