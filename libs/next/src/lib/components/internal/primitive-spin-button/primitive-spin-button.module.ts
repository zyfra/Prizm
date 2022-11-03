import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  PzmFocusableModule,
  PzmFocusedModule,
  PzmFocusVisibleModule,
  PzmPreventDefaultModule,
} from '../../../directives';
import { PzmButtonModule } from '../../button/button.module';

import { PzmPrimitiveSpinButtonComponent } from './primitive-spin-button.component';

@NgModule({
    imports: [
        CommonModule,
        PzmFocusVisibleModule,
        PzmFocusedModule,
        PzmFocusableModule,
        PzmPreventDefaultModule,
        PzmButtonModule,
    ],
    declarations: [PzmPrimitiveSpinButtonComponent],
    exports: [PzmPrimitiveSpinButtonComponent],
})
export class PzmPrimitiveSpinButtonModule {}
