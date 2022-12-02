import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PrizmTableHeaderCheckboxComponent } from './table-header-checkbox/table-header-checkbox.component';
import { PrizmTableCheckboxComponent } from './table-checkbox/prizm-table-checkbox.component';
import { PrizmSortableColumnDirective } from './directives/sortable-column.directive';
import { PrizmSortIconComponent } from './sort-icon/sort-icon.component';
import { PrizmTableColumnFilterComponent } from './table-column-filter/table-column-filter.component';
import { PrizmEditableColumnDirective } from './directives/editable-column.directive';
import { PrizmCellEditorComponent } from './cell-editor/cell-editor.component';
import { PrizmEditableRowDirective } from './directives/editable-row.directive';
import { PrizmInitEditableRowDirective } from './directives/init-editable-row.directive';
import { PrizmSaveEditableRowDirective } from './directives/save-editable-row.directive';
import { PrizmCancelEditableRowDirective } from './directives/cancel-editable-row.directive';
import { PrizmFrozenColumnDirective } from './directives/frozen-column.directive';
import { PrizmResizableColumnDirective } from './directives/resizable-column.directive';
import { PrizmReordableRowDirective } from './directives/reordable-row.directive';
import { PrizmReordableRowHandlerDirective } from './directives/reordable-row-handler.directive';
import { PrizmSelectableRowDirective } from './directives/selectable-row.directive';
import { PrizmRowGroupHeaderDirective } from './directives/row-group-header.directive';
import { PrizmReordableColumnDirective } from './directives/reordable-column.directive';
import { PrizmRowTogglerComponent } from './row-toggler/row-toggler.component';
import { PrizmSearchCellComponent } from './search-cell/search-cell.component';
import { PrizmTableSharedModule } from './base-table/base-table.module';
import { BaseTableTemplateDirective } from './base-table/directives/base-table-template.directive';
import { PrizmBaseTableComponent, PrizmRowBaseDirective } from './base-table';
import { PrizmTableComponent } from './prizm-table.component';
import { PrizmCellStatusDirective } from './directives/row-status.directive';

@NgModule({
  declarations: [
    PrizmTableComponent,
    PrizmTableHeaderCheckboxComponent,
    PrizmTableCheckboxComponent,
    PrizmSortableColumnDirective,
    PrizmSortIconComponent,
    PrizmTableColumnFilterComponent,
    PrizmEditableColumnDirective,
    PrizmCellEditorComponent,
    PrizmEditableRowDirective,
    PrizmInitEditableRowDirective,
    PrizmSaveEditableRowDirective,
    PrizmCancelEditableRowDirective,
    PrizmFrozenColumnDirective,
    PrizmResizableColumnDirective,
    PrizmReordableRowDirective,
    PrizmReordableRowHandlerDirective,
    PrizmSelectableRowDirective,
    PrizmRowGroupHeaderDirective,
    PrizmReordableColumnDirective,
    PrizmRowTogglerComponent,
    PrizmSearchCellComponent,
    PrizmCellStatusDirective,
  ],
  imports: [CommonModule, TableModule, PrizmTableSharedModule],
  exports: [
    PrizmTableComponent,
    PrizmTableHeaderCheckboxComponent,
    PrizmTableCheckboxComponent,
    PrizmSortableColumnDirective,
    PrizmSortIconComponent,
    PrizmTableColumnFilterComponent,
    PrizmEditableColumnDirective,
    PrizmCellEditorComponent,
    PrizmEditableRowDirective,
    PrizmInitEditableRowDirective,
    PrizmSaveEditableRowDirective,
    PrizmCancelEditableRowDirective,
    PrizmFrozenColumnDirective,
    PrizmResizableColumnDirective,
    PrizmReordableRowDirective,
    PrizmReordableRowHandlerDirective,
    PrizmSelectableRowDirective,
    PrizmReordableColumnDirective,
    PrizmRowTogglerComponent,
    PrizmRowGroupHeaderDirective,
    PrizmSearchCellComponent,
    BaseTableTemplateDirective,
    PrizmRowBaseDirective,
    PrizmBaseTableComponent,
    PrizmCellStatusDirective,
  ],
})
export class ZuiTableModule {}
