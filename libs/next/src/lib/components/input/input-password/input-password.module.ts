import { NgModule } from '@angular/core';
import { PzmInputCommonModule } from '../common/input-common.module';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { PzmInputPasswordDefaultControlComponent } from './input-password-auxiliary-control.component';
import { PzmInputPasswordDirective } from './input-password.directive';

@NgModule({
  imports: [PzmInputCommonModule, PzmInputTextModule],
  declarations: [PzmInputPasswordDirective, PzmInputPasswordDefaultControlComponent],
  exports: [
    PzmInputCommonModule,
    PzmInputTextModule,
    PzmInputPasswordDirective,
    PzmInputPasswordDefaultControlComponent,
  ],
})
export class PzmInputPasswordModule {}

