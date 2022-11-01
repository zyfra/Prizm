import { NgModule } from '@angular/core';
import { PzmInputCommonModule } from '../common/input-common.module';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { PzmInputNumberAuxiliaryControlDirective } from './input-number-auxiliary-control.directive';
import { PzmInputNumberDefaultControlsComponent } from './input-number-auxiliary-controls.component';
import { PzmInputNumberDirective } from './input-number.directive';

@NgModule({
  imports: [PzmInputCommonModule, PzmInputTextModule],
  declarations: [
    PzmInputNumberDirective,
    PzmInputNumberAuxiliaryControlDirective,
    PzmInputNumberDefaultControlsComponent,
  ],
  exports: [
    PzmInputNumberAuxiliaryControlDirective,
    PzmInputCommonModule,
    PzmInputNumberDirective,
    PzmInputTextModule,
    PzmInputNumberDefaultControlsComponent,
  ],
})
export class PzmInputNumberModule {}

