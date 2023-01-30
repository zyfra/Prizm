import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputTextComponent } from './input-text.component';
import { PrizmTextareaDirective } from './textarea.directive';

@NgModule({
  imports: [PrizmInputCommonModule],
  declarations: [PrizmInputTextComponent, PrizmTextareaDirective],
  exports: [PrizmInputCommonModule, PrizmInputTextComponent, PrizmTextareaDirective],
})
export class PrizmInputTextModule {}
