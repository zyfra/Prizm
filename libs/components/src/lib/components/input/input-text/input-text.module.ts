import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputTextComponent } from './input-text.component';
import { PrizmTextareaDirective } from './textarea.directive';
import { PrizmInputBlockComponent } from './input-block.component';

@NgModule({
  imports: [PrizmInputCommonModule],
  declarations: [PrizmInputBlockComponent, PrizmInputTextComponent, PrizmTextareaDirective],
  exports: [
    PrizmInputCommonModule,
    PrizmInputTextComponent,
    PrizmTextareaDirective,
    PrizmInputBlockComponent,
  ],
})
export class PrizmInputTextModule {}
