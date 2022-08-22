import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiHintModule } from '../../../directives/hint';
import { ZuiIconModule } from '../../icon';
import { ZuiInputStatusSubtextComponent } from './input-invalid-subtext/input-status-subtext.component';
import { ZuiInputLayoutComponent } from './input-layout/input-layout.component';
import { ZuiInputStatusTextDirective } from './input-status-text/input-status-text.directive';
import { ZuiInputIconButtonModule } from './input-icon-button/input-icon-button.module';

@NgModule({
  imports: [CommonModule, ZuiIconModule, ZuiHintModule, ZuiInputIconButtonModule],
  declarations: [
    ZuiInputLayoutComponent,
    ZuiInputStatusSubtextComponent,
    ZuiInputStatusTextDirective,
  ],
  exports: [
    CommonModule,
    ZuiInputLayoutComponent,
    ZuiInputStatusSubtextComponent,
    ZuiInputIconButtonModule,
    ZuiInputStatusTextDirective,
  ],
})
export class ZuiInputCommonModule {}

