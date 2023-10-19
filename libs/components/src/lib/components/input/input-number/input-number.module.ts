import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputNumberAuxiliaryControlDirective } from './input-number-auxiliary-control.directive';
import { PrizmInputNumberDefaultControlsComponent } from './input-number-auxiliary-controls.component';
import { PrizmInputNumberComponent } from './input-number.component';

@NgModule({
  imports: [PrizmInputCommonModule, PrizmInputTextModule],
  declarations: [
    PrizmInputNumberComponent,
    PrizmInputNumberAuxiliaryControlDirective,
    PrizmInputNumberDefaultControlsComponent,
  ],
  exports: [
    PrizmInputNumberAuxiliaryControlDirective,
    PrizmInputCommonModule,
    PrizmInputNumberComponent,
    PrizmInputTextModule,
    PrizmInputNumberDefaultControlsComponent,
  ],
})
export class PrizmInputNumberModule {}
