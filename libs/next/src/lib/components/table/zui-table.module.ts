import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ZuiTableHeaderCheckboxComponent } from './table-header-checkbox/table-header-checkbox.component';
import { ZuiTableCheckboxComponent } from './table-checkbox/zui-table-checkbox.component';
import { ZuiSortableColumnDirective } from './directives/sortable-column.directive';
import { ZuiSortIconComponent } from './sort-icon/sort-icon.component';
import { ZuiTableColumnFilterComponent } from './table-column-filter/table-column-filter.component';
import { ZuiEditableColumnDirective } from './directives/editable-column.directive';
import { ZuiCellEditorComponent } from './cell-editor/cell-editor.component';
import { ZuiEditableRowDirective } from './directives/editable-row.directive';
import { ZuiInitEditableRowDirective } from './directives/init-editable-row.directive';
import { ZuiSaveEditableRowDirective } from './directives/save-editable-row.directive';
import { ZuiCancelEditableRowDirective } from './directives/cancel-editable-row.directive';
import { ZuiFrozenColumnDirective } from './directives/frozen-column.directive';
import { ZuiResizableColumnDirective } from './directives/resizable-column.directive';
import { ZuiReordableRowDirective } from './directives/reordable-row.directive';
import { ZuiReordableRowHandlerDirective } from './directives/reordable-row-handler.directive';
import { ZuiSelectableRowDirective } from './directives/selectable-row.directive';
import { ZuiRowGroupHeaderDirective } from './directives/row-group-header.directive';
import { ZuiReordableColumnDirective } from './directives/reordable-column.directive';
import { ZuiRowTogglerComponent } from './row-toggler/row-toggler.component';
import { ZuiSearchCellComponent } from './search-cell/search-cell.component';
import { ZuiTableSharedModule } from './base-table/base-table.module';
import { BaseTableTemplateDirective } from './base-table/directives/base-table-template.directive';
import { ZuiBaseTableComponent, ZuiRowBaseDirective } from './base-table';
import { ZuiTableComponent } from './zui-table.component';
import { ZuiCellStatusDirective } from './directives/row-status.directive';

@NgModule({
  declarations: [
    ZuiTableComponent,
    ZuiTableHeaderCheckboxComponent,
    ZuiTableCheckboxComponent,
    ZuiSortableColumnDirective,
    ZuiSortIconComponent,
    ZuiTableColumnFilterComponent,
    ZuiEditableColumnDirective,
    ZuiCellEditorComponent,
    ZuiEditableRowDirective,
    ZuiInitEditableRowDirective,
    ZuiSaveEditableRowDirective,
    ZuiCancelEditableRowDirective,
    ZuiFrozenColumnDirective,
    ZuiResizableColumnDirective,
    ZuiReordableRowDirective,
    ZuiReordableRowHandlerDirective,
    ZuiSelectableRowDirective,
    ZuiRowGroupHeaderDirective,
    ZuiReordableColumnDirective,
    ZuiRowTogglerComponent,
    ZuiSearchCellComponent,
    ZuiCellStatusDirective,
  ],
  imports: [CommonModule, TableModule, ZuiTableSharedModule],
  exports: [
    ZuiTableComponent,
    ZuiTableHeaderCheckboxComponent,
    ZuiTableCheckboxComponent,
    ZuiSortableColumnDirective,
    ZuiSortIconComponent,
    ZuiTableColumnFilterComponent,
    ZuiEditableColumnDirective,
    ZuiCellEditorComponent,
    ZuiEditableRowDirective,
    ZuiInitEditableRowDirective,
    ZuiSaveEditableRowDirective,
    ZuiCancelEditableRowDirective,
    ZuiFrozenColumnDirective,
    ZuiResizableColumnDirective,
    ZuiReordableRowDirective,
    ZuiReordableRowHandlerDirective,
    ZuiSelectableRowDirective,
    ZuiReordableColumnDirective,
    ZuiRowTogglerComponent,
    ZuiRowGroupHeaderDirective,
    ZuiSearchCellComponent,
    BaseTableTemplateDirective,
    ZuiRowBaseDirective,
    ZuiBaseTableComponent,
    ZuiCellStatusDirective,
  ],
})
export class ZuiTableModule {}
