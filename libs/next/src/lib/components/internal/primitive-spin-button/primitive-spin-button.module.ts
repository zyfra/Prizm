import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ZuiFocusableModule,
  ZuiFocusedModule,
  ZuiFocusVisibleModule,
  ZuiPreventDefaultModule,
} from '../../../directives';
import { ZuiButtonModule } from '../../button/button.module';

import { ZuiPrimitiveSpinButtonComponent } from './primitive-spin-button.component';

@NgModule({
    imports: [
        CommonModule,
        ZuiFocusVisibleModule,
        ZuiFocusedModule,
        ZuiFocusableModule,
        ZuiPreventDefaultModule,
        ZuiButtonModule,
    ],
    declarations: [ZuiPrimitiveSpinButtonComponent],
    exports: [ZuiPrimitiveSpinButtonComponent],
})
export class ZuiPrimitiveSpinButtonModule {}
