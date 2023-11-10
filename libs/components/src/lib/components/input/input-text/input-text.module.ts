import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputTextComponent } from './input-text.component';
import { PrizmTextareaDirective } from './textarea.directive';
import { PrizmInputBlockComponent } from './input-block.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [
    PrizmInputCommonModule,
    PrizmInputBlockComponent,
    PrizmInputTextComponent,
    PrizmTextareaDirective,
  ],
  exports: [
    PrizmInputCommonModule,
    PrizmInputTextComponent,
    PrizmTextareaDirective,
    PrizmInputBlockComponent,
  ],
})
export class PrizmInputTextModule {}
