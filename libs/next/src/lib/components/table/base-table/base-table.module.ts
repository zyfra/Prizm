import { NgModule } from '@angular/core';
import { BaseTableTemplateDirective } from './directives/base-table-template.directive';
import { PzmRowBaseDirective } from './directives/pzm-row-base.directive';
import { PzmBaseTableComponent } from './pzm-base-table.directive';

@NgModule({
  declarations: [BaseTableTemplateDirective, PzmRowBaseDirective, PzmBaseTableComponent],
  exports: [BaseTableTemplateDirective, PzmRowBaseDirective, PzmBaseTableComponent],
})
export class PzmTableSharedModule {}
