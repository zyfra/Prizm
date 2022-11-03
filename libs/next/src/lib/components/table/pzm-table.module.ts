import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PzmTableHeaderCheckboxComponent } from './table-header-checkbox/table-header-checkbox.component';
import { PzmTableCheckboxComponent } from './table-checkbox/pzm-table-checkbox.component';
import { PzmSortableColumnDirective } from './directives/sortable-column.directive';
import { PzmSortIconComponent } from './sort-icon/sort-icon.component';
import { PzmTableColumnFilterComponent } from './table-column-filter/table-column-filter.component';
import { PzmEditableColumnDirective } from './directives/editable-column.directive';
import { PzmCellEditorComponent } from './cell-editor/cell-editor.component';
import { PzmEditableRowDirective } from './directives/editable-row.directive';
import { PzmInitEditableRowDirective } from './directives/init-editable-row.directive';
import { PzmSaveEditableRowDirective } from './directives/save-editable-row.directive';
import { PzmCancelEditableRowDirective } from './directives/cancel-editable-row.directive';
import { PzmFrozenColumnDirective } from './directives/frozen-column.directive';
import { PzmResizableColumnDirective } from './directives/resizable-column.directive';
import { PzmReordableRowDirective } from './directives/reordable-row.directive';
import { PzmReordableRowHandlerDirective } from './directives/reordable-row-handler.directive';
import { PzmSelectableRowDirective } from './directives/selectable-row.directive';
import { PzmRowGroupHeaderDirective } from './directives/row-group-header.directive';
import { PzmReordableColumnDirective } from './directives/reordable-column.directive';
import { PzmRowTogglerComponent } from './row-toggler/row-toggler.component';
import { PzmSearchCellComponent } from './search-cell/search-cell.component';
import { PzmTableSharedModule } from './base-table/base-table.module';
import { BaseTableTemplateDirective } from './base-table/directives/base-table-template.directive';
import { PzmBaseTableComponent, PzmRowBaseDirective } from './base-table';
import { PzmTableComponent } from './pzm-table.component';
import { PzmCellStatusDirective } from './directives/row-status.directive';

@NgModule({
  declarations: [
    PzmTableComponent,
    PzmTableHeaderCheckboxComponent,
    PzmTableCheckboxComponent,
    PzmSortableColumnDirective,
    PzmSortIconComponent,
    PzmTableColumnFilterComponent,
    PzmEditableColumnDirective,
    PzmCellEditorComponent,
    PzmEditableRowDirective,
    PzmInitEditableRowDirective,
    PzmSaveEditableRowDirective,
    PzmCancelEditableRowDirective,
    PzmFrozenColumnDirective,
    PzmResizableColumnDirective,
    PzmReordableRowDirective,
    PzmReordableRowHandlerDirective,
    PzmSelectableRowDirective,
    PzmRowGroupHeaderDirective,
    PzmReordableColumnDirective,
    PzmRowTogglerComponent,
    PzmSearchCellComponent,
    PzmCellStatusDirective,
  ],
  imports: [CommonModule, TableModule, PzmTableSharedModule],
  exports: [
    PzmTableComponent,
    PzmTableHeaderCheckboxComponent,
    PzmTableCheckboxComponent,
    PzmSortableColumnDirective,
    PzmSortIconComponent,
    PzmTableColumnFilterComponent,
    PzmEditableColumnDirective,
    PzmCellEditorComponent,
    PzmEditableRowDirective,
    PzmInitEditableRowDirective,
    PzmSaveEditableRowDirective,
    PzmCancelEditableRowDirective,
    PzmFrozenColumnDirective,
    PzmResizableColumnDirective,
    PzmReordableRowDirective,
    PzmReordableRowHandlerDirective,
    PzmSelectableRowDirective,
    PzmReordableColumnDirective,
    PzmRowTogglerComponent,
    PzmRowGroupHeaderDirective,
    PzmSearchCellComponent,
    BaseTableTemplateDirective,
    PzmRowBaseDirective,
    PzmBaseTableComponent,
    PzmCellStatusDirective,
  ],
})
export class PzmTableModule {}
