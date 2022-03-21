import { NgModule } from '@angular/core';
import { BaseTableTemplateDirective } from './directives/base-table-template.directive';
import { ZyfraRowBaseDirective } from './directives/zyfra-row-base.directive';
import { ZyfraBaseTableComponent } from './zyfra-base-table.directive';

@NgModule({
  declarations: [BaseTableTemplateDirective, ZyfraRowBaseDirective, ZyfraBaseTableComponent],
  exports: [BaseTableTemplateDirective, ZyfraRowBaseDirective, ZyfraBaseTableComponent],
})
export class ZyfraTableSharedModule {}
