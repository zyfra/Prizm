import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputNumberAuxiliaryControlDirective } from './input-number-auxiliary-control.directive';
import { PrizmInputNumberDefaultControlsComponent } from './input-number-auxiliary-controls.component';
import { PrizmInputNumberDirective } from './input-number.directive';
import { PrizmInputNumberValidatorDirective } from './input-number-validator';

@NgModule({
  imports: [PrizmInputCommonModule, PrizmInputTextModule],
  declarations: [
    PrizmInputNumberDirective,
    PrizmInputNumberValidatorDirective,
    PrizmInputNumberAuxiliaryControlDirective,
    PrizmInputNumberDefaultControlsComponent,
  ],
  exports: [
    PrizmInputNumberAuxiliaryControlDirective,
    PrizmInputCommonModule,
    PrizmInputNumberDirective,
    PrizmInputNumberValidatorDirective,
    PrizmInputTextModule,
    PrizmInputNumberDefaultControlsComponent,
  ],
})
export class PrizmInputNumberModule {}
