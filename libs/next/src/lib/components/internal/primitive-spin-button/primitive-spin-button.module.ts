import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  PzmFocusableModule,
  PzmFocusedModule,
  PzmFocusVisibleModule,
  PzmPreventDefaultModule,
} from '../../../directives';
import { PzmButtonModule } from '../../button/button.module';

import { ZuiPrimitiveSpinButtonComponent } from './primitive-spin-button.component';

@NgModule({
    imports: [
        CommonModule,
        PzmFocusVisibleModule,
        PzmFocusedModule,
        PzmFocusableModule,
        PzmPreventDefaultModule,
        PzmButtonModule,
    ],
    declarations: [ZuiPrimitiveSpinButtonComponent],
    exports: [ZuiPrimitiveSpinButtonComponent],
})
export class ZuiPrimitiveSpinButtonModule {}
