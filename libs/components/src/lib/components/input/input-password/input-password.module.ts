import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputPasswordDefaultControlComponent } from './input-password-auxiliary-control.component';
import { PrizmInputPasswordDirective } from './input-password.directive';

@NgModule({
  imports: [PrizmInputCommonModule, PrizmInputTextModule],
  declarations: [PrizmInputPasswordDirective, PrizmInputPasswordDefaultControlComponent],
  exports: [
    PrizmInputCommonModule,
    PrizmInputTextModule,
    PrizmInputPasswordDirective,
    PrizmInputPasswordDefaultControlComponent,
  ],
})
export class PrizmInputPasswordModule {}

