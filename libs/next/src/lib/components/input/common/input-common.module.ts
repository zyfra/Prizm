import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiHintModule } from '../../../directives/hint';
import { ZuiIconModule } from '../../icon';

import { ZuiInputIconButtonComponent } from './input-icon-button/input-icon-button.component';
import { ZuiInputStatusSubtextComponent } from './input-invalid-subtext/input-status-subtext.component';
import { ZuiInputLayoutComponent } from './input-layout/input-layout.component';
import { ZuiInputStatusTextDirective } from './input-status-text/input-status-text.directive';

@NgModule({
  imports: [CommonModule, ZuiIconModule, ZuiHintModule],
  declarations: [
    ZuiInputLayoutComponent,
    ZuiInputStatusSubtextComponent,
    ZuiInputIconButtonComponent,
    ZuiInputStatusTextDirective,
  ],
  exports: [
    CommonModule,
    ZuiInputLayoutComponent,
    ZuiInputStatusSubtextComponent,
    ZuiInputIconButtonComponent,
    ZuiInputStatusTextDirective,
  ],
})
export class ZuiInputCommonModule {}

