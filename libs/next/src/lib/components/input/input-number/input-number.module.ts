import { NgModule } from '@angular/core';
import { ZuiInputCommonModule } from '../common/input-common.module';
import { ZuiInputTextModule } from '../input-text/input-text.module';
import { ZuiInputNumberAuxiliaryControlDirective } from './input-number-auxiliary-control.directive';
import { ZuiInputNumberDefaultControlsComponent } from './input-number-auxiliary-controls.component';
import { ZuiInputNumberDirective } from './input-number.directive';

@NgModule({
  imports: [ZuiInputCommonModule, ZuiInputTextModule],
  declarations: [
    ZuiInputNumberDirective,
    ZuiInputNumberAuxiliaryControlDirective,
    ZuiInputNumberDefaultControlsComponent,
  ],
  exports: [
    ZuiInputNumberAuxiliaryControlDirective,
    ZuiInputCommonModule,
    ZuiInputNumberDirective,
    ZuiInputTextModule,
    ZuiInputNumberDefaultControlsComponent,
  ],
})
export class ZuiInputNumberModule {}

