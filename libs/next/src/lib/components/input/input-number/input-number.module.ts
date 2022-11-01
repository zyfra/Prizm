import { NgModule } from '@angular/core';
import { PzmInputCommonModule } from '../common/input-common.module';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { ZuiInputNumberAuxiliaryControlDirective } from './input-number-auxiliary-control.directive';
import { ZuiInputNumberDefaultControlsComponent } from './input-number-auxiliary-controls.component';
import { ZuiInputNumberDirective } from './input-number.directive';

@NgModule({
  imports: [PzmInputCommonModule, PzmInputTextModule],
  declarations: [
    ZuiInputNumberDirective,
    ZuiInputNumberAuxiliaryControlDirective,
    ZuiInputNumberDefaultControlsComponent,
  ],
  exports: [
    ZuiInputNumberAuxiliaryControlDirective,
    PzmInputCommonModule,
    ZuiInputNumberDirective,
    PzmInputTextModule,
    ZuiInputNumberDefaultControlsComponent,
  ],
})
export class ZuiInputNumberModule {}

