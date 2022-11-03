import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmHintModule } from '../../../directives/hint';
import { PzmIconModule } from '../../icon';
import { PzmInputStatusSubtextComponent } from './input-invalid-subtext/input-status-subtext.component';
import { PzmInputLayoutComponent } from './input-layout/input-layout.component';
import { PzmInputStatusTextDirective } from './input-status-text/input-status-text.directive';
import { PzmInputIconButtonModule } from './input-icon-button/input-icon-button.module';

@NgModule({
  imports: [CommonModule, PzmIconModule, PzmHintModule, PzmInputIconButtonModule],
  declarations: [
    PzmInputLayoutComponent,
    PzmInputStatusSubtextComponent,
    PzmInputStatusTextDirective,
  ],
  exports: [
    CommonModule,
    PzmInputLayoutComponent,
    PzmInputStatusSubtextComponent,
    PzmInputIconButtonModule,
    PzmInputStatusTextDirective,
  ],
})
export class PzmInputCommonModule {}

