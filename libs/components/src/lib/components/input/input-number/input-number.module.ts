import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputNumberAuxiliaryControlDirective } from './input-number-auxiliary-control.directive';
import { PrizmInputNumberDefaultControlsComponent } from './input-number-auxiliary-controls.component';
import { PrizmInputNumberComponent } from './input-number.component';

/**
 * @deprecated
 * */
@NgModule({
  imports: [
    PrizmInputNumberComponent,
    PrizmInputNumberAuxiliaryControlDirective,
    PrizmInputNumberDefaultControlsComponent,
  ],
  exports: [
    PrizmInputNumberAuxiliaryControlDirective,
    PrizmInputCommonModule,
    PrizmInputNumberComponent,
    PrizmInputNumberDefaultControlsComponent,
  ],
})
export class PrizmInputNumberModule {}
