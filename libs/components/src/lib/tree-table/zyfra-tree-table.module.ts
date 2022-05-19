import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeTableModule } from 'primeng/treetable';

import { ZyfraTreeTableComponent } from './tree-table.component';
import { ZyfraTreeTableSelectableRowDirective } from './directives/tree-table-selectable-row.directive';
import { ZyfraTreeTableTogglerComponent } from './tree-table-toggler/tree-table-toggler.component';
import { ZyfraTreeTableCheckboxComponent } from './tree-table-checkbox/tree-table-checkbox.component';
import { ZyfraTreeTableHeaderCheckboxComponent } from './tree-table-header-checkbox/tree-table-header-checkbox.component';
import { ZyfraTreeTableSortableColumnDirective } from './directives/tree-table-sortable-column.directive';
import { ZyfraTreeTableSortIconComponent } from './tree-table-sort-icon/tree-table-sort-icon.component';
import { ZyfraTreeTableCellEditorComponent } from './tree-table-cell-editor/tree-table-cell-editor.component';
import { ZyfraTreeTableEditableColumnDirective } from './directives/tree-table-editable-column.directive';
import { ZyfraTreeTableReorderableColumnDirective } from './directives/tree-table-reorderable-column.directive';
import { ZyfraTreeTableRowDirective } from './directives/tree-table-row.directive';
import { ZyfraTreeTableSearchCellComponent } from './tree-table-search-cell/tree-table-search-cell.component';
import { ZyfraTableSharedModule } from '../@core/base-table/base-table.module';
import { BaseTableTemplateDirective } from '../@core/base-table/directives/base-table-template.directive';
import { ZyfraBaseTableComponent, ZyfraRowBaseDirective } from '../@core/base-table';

@NgModule({
  declarations: [
    ZyfraTreeTableComponent,
    ZyfraTreeTableRowDirective,
    ZyfraTreeTableSelectableRowDirective,
    ZyfraTreeTableTogglerComponent,
    ZyfraTreeTableCheckboxComponent,
    ZyfraTreeTableHeaderCheckboxComponent,
    ZyfraTreeTableSortableColumnDirective,
    ZyfraTreeTableSortIconComponent,
    ZyfraTreeTableCellEditorComponent,
    ZyfraTreeTableEditableColumnDirective,
    ZyfraTreeTableReorderableColumnDirective,
    ZyfraTreeTableSearchCellComponent,
  ],
  imports: [CommonModule, TreeTableModule, ZyfraTableSharedModule],
  exports: [
    ZyfraTreeTableComponent,
    ZyfraTreeTableRowDirective,
    ZyfraTreeTableSelectableRowDirective,
    ZyfraTreeTableTogglerComponent,
    ZyfraTreeTableCheckboxComponent,
    ZyfraTreeTableHeaderCheckboxComponent,
    ZyfraTreeTableSortableColumnDirective,
    ZyfraTreeTableSortIconComponent,
    ZyfraTreeTableCellEditorComponent,
    ZyfraTreeTableEditableColumnDirective,
    ZyfraTreeTableReorderableColumnDirective,
    ZyfraTreeTableSearchCellComponent,
    BaseTableTemplateDirective,
    ZyfraRowBaseDirective,
    ZyfraBaseTableComponent,
  ],
})
export class ZyfraTreeTableModule {}
