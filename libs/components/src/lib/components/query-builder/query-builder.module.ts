import { NgModule } from '@angular/core';
import { PrizmConditionTemplate } from './condition-template.directive';
import { PrizmQueryBuilderComponent } from './query-builder.component';

@NgModule({
  imports: [PrizmQueryBuilderComponent, PrizmConditionTemplate],
  exports: [PrizmQueryBuilderComponent, PrizmConditionTemplate],
})
export class PrizmQueryBuilder {}
