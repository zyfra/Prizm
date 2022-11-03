import { NgModule } from '@angular/core';
import { BaseTableTemplateDirective } from './directives/base-table-template.directive';
import { PrizmRowBaseDirective } from './directives/pzm-row-base.directive';
import { PrizmBaseTableComponent } from './pzm-base-table.directive';

@NgModule({
  declarations: [BaseTableTemplateDirective, PrizmRowBaseDirective, PrizmBaseTableComponent],
  exports: [BaseTableTemplateDirective, PrizmRowBaseDirective, PrizmBaseTableComponent],
})
export class PrizmTableSharedModule {}
