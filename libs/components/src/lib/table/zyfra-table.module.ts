import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ZyfraTableComponent } from './zyfra-table.component';
import { ZyfraTableHeaderCheckboxComponent } from './table-header-checkbox/table-header-checkbox.component';
import { ZyfraTableCheckboxComponent } from './table-checkbox/zyfra-table-checkbox.component';
import { ZyfraSortableColumnDirective } from './directives/sortable-column.directive';
import { ZyfraSortIconComponent } from './sort-icon/sort-icon.component';
import { ZyfraTableColumnFilterComponent } from './table-column-filter/table-column-filter.component';
import { ZyfraEditableColumnDirective } from './directives/editable-column.directive';
import { ZyfraCellEditorComponent } from './cell-editor/cell-editor.component';
import { ZyfraEditableRowDirective } from './directives/editable-row.directive';
import { ZyfraInitEditableRowDirective } from './directives/init-editable-row.directive';
import { ZyfraSaveEditableRowDirective } from './directives/save-editable-row.directive';
import { ZyfraCancelEditableRowDirective } from './directives/cancel-editable-row.directive';
import { ZyfraFrozenColumnDirective } from './directives/frozen-column.directive';
import { ZyfraResizableColumnDirective } from './directives/resizable-column.directive';
import { ZyfraReordableRowDirective } from './directives/reordable-row.directive';
import { ZyfraReordableRowHandlerDirective } from './directives/reordable-row-handler.directive';
import { ZyfraSelectableRowDirective } from './directives/selectable-row.directive';
import { ZyfraRowGroupHeaderDirective } from './directives/row-group-header.directive';
import { ZyfraReordableColumnDirective } from './directives/reordable-column.directive';
import { ZyfraRowTogglerComponent } from './row-toggler/row-toggler.component';
import { ZyfraSearchCellComponent } from './search-cell/search-cell.component';
import { ZyfraTableSharedModule } from '../@core/base-table/base-table.module';
import { BaseTableTemplateDirective } from '../@core/base-table/directives/base-table-template.directive';
import { ZyfraBaseTableComponent, ZyfraRowBaseDirective } from '../@core/base-table';

@NgModule({
  declarations: [
    ZyfraTableComponent,
    ZyfraTableHeaderCheckboxComponent,
    ZyfraTableCheckboxComponent,
    ZyfraSortableColumnDirective,
    ZyfraSortIconComponent,
    ZyfraTableColumnFilterComponent,
    ZyfraEditableColumnDirective,
    ZyfraCellEditorComponent,
    ZyfraEditableRowDirective,
    ZyfraInitEditableRowDirective,
    ZyfraSaveEditableRowDirective,
    ZyfraCancelEditableRowDirective,
    ZyfraFrozenColumnDirective,
    ZyfraResizableColumnDirective,
    ZyfraReordableRowDirective,
    ZyfraReordableRowHandlerDirective,
    ZyfraSelectableRowDirective,
    ZyfraRowGroupHeaderDirective,
    ZyfraReordableColumnDirective,
    ZyfraRowTogglerComponent,
    ZyfraSearchCellComponent,
  ],
  imports: [CommonModule, TableModule, ZyfraTableSharedModule],
  exports: [
    ZyfraTableComponent,
    ZyfraTableHeaderCheckboxComponent,
    ZyfraTableCheckboxComponent,
    ZyfraSortableColumnDirective,
    ZyfraSortIconComponent,
    ZyfraTableColumnFilterComponent,
    ZyfraEditableColumnDirective,
    ZyfraCellEditorComponent,
    ZyfraEditableRowDirective,
    ZyfraInitEditableRowDirective,
    ZyfraSaveEditableRowDirective,
    ZyfraCancelEditableRowDirective,
    ZyfraFrozenColumnDirective,
    ZyfraResizableColumnDirective,
    ZyfraReordableRowDirective,
    ZyfraReordableRowHandlerDirective,
    ZyfraSelectableRowDirective,
    ZyfraReordableColumnDirective,
    ZyfraRowTogglerComponent,
    ZyfraRowGroupHeaderDirective,
    ZyfraSearchCellComponent,
    BaseTableTemplateDirective,
    ZyfraRowBaseDirective,
    ZyfraBaseTableComponent,
  ],
})
export class ZyfraTableModule {}
