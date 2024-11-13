import { NgModule } from '@angular/core';
import { PrizmConditionDefDirective } from './condition-def.directive';
import { PrizmQueryBuilderComponent } from './query-builder.component';

@NgModule({
  imports: [PrizmQueryBuilderComponent, PrizmConditionDefDirective],
  exports: [PrizmQueryBuilderComponent, PrizmConditionDefDirective],
})
export class PrizmQueryBuilder {}
