import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  PrizmFocusableModule,
  PrizmFocusedModule,
  PrizmFocusVisibleModule,
  PrizmPreventDefaultModule,
} from '../../../directives';
import { PrizmButtonModule } from '../../button/button.module';

import { PrizmPrimitiveSpinButtonComponent } from './primitive-spin-button.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmFocusVisibleModule,
    PrizmFocusedModule,
    PrizmFocusableModule,
    PrizmPreventDefaultModule,
    PrizmButtonModule,
  ],
  declarations: [PrizmPrimitiveSpinButtonComponent],
  exports: [PrizmPrimitiveSpinButtonComponent],
})
export class PrizmPrimitiveSpinButtonModule {}
