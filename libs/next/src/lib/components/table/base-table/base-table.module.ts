import { NgModule } from '@angular/core';
import { BaseTableTemplateDirective } from './directives/base-table-template.directive';
import { ZuiRowBaseDirective } from './directives/zui-row-base.directive';
import { ZuiBaseTableComponent } from './zui-base-table.directive';

@NgModule({
  declarations: [BaseTableTemplateDirective, ZuiRowBaseDirective, ZuiBaseTableComponent],
  exports: [BaseTableTemplateDirective, ZuiRowBaseDirective, ZuiBaseTableComponent],
})
export class ZuiTableSharedModule {}
