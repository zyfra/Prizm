import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  PrizmFocusableModule,
  PrizmFocusedModule,
  PrizmFocusVisibleModule,
  PrizmPreventDefaultDirective,
} from '../../../directives';

import { PrizmPrimitiveSpinButtonComponent } from './primitive-spin-button.component';
import { PrizmButtonComponent } from '../../button';

@NgModule({
  imports: [
    CommonModule,
    PrizmFocusVisibleModule,
    PrizmFocusedModule,
    PrizmFocusableModule,
    PrizmPreventDefaultDirective,
    PrizmButtonComponent,
  ],
  declarations: [PrizmPrimitiveSpinButtonComponent],
  exports: [PrizmPrimitiveSpinButtonComponent],
})
export class PrizmPrimitiveSpinButtonModule {}
