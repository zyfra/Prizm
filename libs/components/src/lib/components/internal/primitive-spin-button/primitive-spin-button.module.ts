import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  PrizmFocusableDirective,
  PrizmFocusedDirective,
  PrizmFocusVisibleDirective,
  PrizmPreventDefaultDirective,
  PrizmHintDirective,
} from '../../../directives';

import { PrizmPrimitiveSpinButtonComponent } from './primitive-spin-button.component';
import { PrizmButtonComponent } from '../../button';

@NgModule({
  imports: [
    CommonModule,
    PrizmFocusVisibleDirective,
    PrizmFocusedDirective,
    PrizmFocusableDirective,
    PrizmPreventDefaultDirective,
    PrizmButtonComponent,
    PrizmHintDirective,
  ],
  declarations: [PrizmPrimitiveSpinButtonComponent],
  exports: [PrizmPrimitiveSpinButtonComponent],
})
export class PrizmPrimitiveSpinButtonModule {}
