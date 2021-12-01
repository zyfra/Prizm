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
import { ZyfraRowDirective } from './directives/row.directive';
import { ZyfraTableTemplateDirective } from './directives/table-template.directive';
import {ZyfraSearchCellComponent} from "./search-cell/search-cell.component";

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
    ZyfraTableTemplateDirective,
    ZyfraRowTogglerComponent,
    ZyfraRowDirective,
    ZyfraSearchCellComponent
  ],
  imports: [
    CommonModule,
    TableModule,
  ],
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
    ZyfraTableTemplateDirective,
    ZyfraRowDirective,
    ZyfraSearchCellComponent
  ]
})
export class ZyfraTableModule {}
