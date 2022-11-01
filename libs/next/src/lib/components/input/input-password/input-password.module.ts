import { NgModule } from '@angular/core';
import { PzmInputCommonModule } from '../common/input-common.module';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { ZuiInputPasswordDefaultControlComponent } from './input-password-auxiliary-control.component';
import { ZuiInputPasswordDirective } from './input-password.directive';

@NgModule({
  imports: [PzmInputCommonModule, PzmInputTextModule],
  declarations: [ZuiInputPasswordDirective, ZuiInputPasswordDefaultControlComponent],
  exports: [
    PzmInputCommonModule,
    PzmInputTextModule,
    ZuiInputPasswordDirective,
    ZuiInputPasswordDefaultControlComponent,
  ],
})
export class ZuiInputPasswordModule {}

