import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmHintModule } from '../../../directives/hint';
import { PrizmIconSvgModule } from '../../icon';
import { PrizmInputStatusSubtextComponent } from './input-invalid-subtext/input-status-subtext.component';
import { PrizmInputLayoutComponent } from './input-layout/input-layout.component';
import { PrizmInputStatusTextDirective } from './input-status-text/input-status-text.directive';
import { PrizmInputIconButtonModule } from './input-icon-button/input-icon-button.module';

@NgModule({
  imports: [CommonModule, PrizmIconSvgModule, PrizmHintModule, PrizmInputIconButtonModule],
  declarations: [
    PrizmInputLayoutComponent,
    PrizmInputStatusSubtextComponent,
    PrizmInputStatusTextDirective,
  ],
  exports: [
    CommonModule,
    PrizmInputLayoutComponent,
    PrizmInputStatusSubtextComponent,
    PrizmInputIconButtonModule,
    PrizmInputStatusTextDirective,
  ],
})
export class PrizmInputCommonModule {}

